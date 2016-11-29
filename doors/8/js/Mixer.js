class Mixer {
    constructor(div) {
        this.tracks = [];
        this.div = div;
        this.masterVolume = ac.createGain();
        this.masterVolume.gain.value = 0.8;
        this.masterVolume.connect(ac.destination);
    }
    addTrack(track) {
        this.tracks.push(track);
        var trackSection = document.createElement('section');
        var trackFader = document.createElement('input');
        trackFader.setAttribute('type', 'range');

        // map track fader to track volume
        trackFader.addEventListener('change', function() {
            console.log(this.value);
            track.instrument.volume.gain.value = this.value / 100;
        });



        trackFader.value = 80;
        track.instrument.volume.gain.value = 0.8;

        var trackMuteCheckbox = document.createElement('input');
        trackMuteCheckbox.setAttribute('type', 'checkbox');

        trackMuteCheckbox.addEventListener('change', function () {
            track.toggleMute();
        });

        var trackLabel = document.createElement('span');
        trackLabel.innerHTML = track.label;
        trackLabel.setAttribute('class', 'track-label');

        trackSection.appendChild(trackFader);
        trackSection.appendChild(trackMuteCheckbox);
        trackSection.appendChild(trackLabel);


        var panKnob = document.createElement('input');
        panKnob.setAttribute('class', 'panKnob');
        panKnob.setAttribute('type', 'knob');
        trackSection.appendChild(panKnob);


        this.div.appendChild(trackSection);


    }
}
