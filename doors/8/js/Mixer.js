class Mixer {
    constructor(div) {
        this.tracks = [];
        this.div = div;
        this.masterVolume = ac.createGain();
        this.masterVolume.gain.value = 0.8;
        this.masterVolume.connect(ac.destination);

        document.getElementById('masterFader').addEventListener('change', function(e) {
            console.log(this.value);
            var k = e.target.parentElement.getElementsByClassName('fader-knob')[0];
            console.log(e.target.height);
            k.style.bottom = (175 * (e.target.value / 100) + 8 + 25) + 'px';
        });
        

    }
    addTrack(track) {
        this.tracks.push(track);
        var trackSection = document.createElement('section');
        trackSection.setAttribute('class', 'track');
        var trackFader = document.createElement('input');
        trackFader.setAttribute('type', 'range');
        trackFader.setAttribute('class', 'fader');
        trackFader.setAttribute('orient', 'vertical');



        var trackFaderKnob = document.createElement('span');
        trackFaderKnob.setAttribute('class','fader-knob');

        trackSection.appendChild(trackFaderKnob);

        trackSection.appendChild(trackFader);

        // map track fader to track volume
        trackFader.addEventListener('change', function(e) {
            console.log(this.value);

            track.instrument.volume.gain.value = this.value / 100;
            var k = e.target.parentElement.getElementsByClassName('fader-knob')[0];
            console.log(e.target.height);
            k.style.bottom = (175 * (e.target.value / 100) + 8 + 25) + 'px';
        });


        trackFader.value = 80;
        track.instrument.volume.gain.value = 0.8;

        trackFaderKnob.style.bottom = ((175 * 0.8) + 8 + 25) + 'px';


        var trackMuteButton = document.createElement('button');
        trackMuteButton.setAttribute('type', 'button');
        trackMuteButton.innerHTML = 'MUTE';
        trackMuteButton.setAttribute('class', 'mute-button');
        trackMuteButton.addEventListener('click', function () {
            track.toggleMute();
            if (track.muted) {
                this.setAttribute('class', 'mute-button muted');
            } else {
                this.setAttribute('class', 'mute-button');

            }
        });

        var trackLabel = document.createElement('span');
        trackLabel.innerHTML = track.label;
        trackLabel.setAttribute('class', 'track-label');



        trackSection.appendChild(trackMuteButton);
        trackSection.appendChild(trackLabel);
/*

        var panKnob = document.createElement('input');
        panKnob.setAttribute('class', 'panKnob');
        panKnob.setAttribute('type', 'knob');
        trackSection.appendChild(panKnob);
*/

        this.div.appendChild(trackSection);


    }
}
