class Mixer {
    constructor(div) {
        this.tracks = [];
        this.div = div;
        this.masterFaderPosition = 0.8;
    }
    addTrack(track) {
        this.tracks.push(track);
        var trackSection = document.createElement('section');
        var trackFader = document.createElement('input');
        trackFader.setAttribute('type', 'range');
        var trackMuteCheckbox = document.createElement('input');
        trackMuteCheckbox.setAttribute('type', 'checkbox');
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
