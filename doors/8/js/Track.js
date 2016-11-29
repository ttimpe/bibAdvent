class Track {
    constructor(label, instrument) {
        this.pan = 0.5;
        this.muted = false;
        this.unmutedVolume = 0.8;
        this.solo = false;
        this.label = label;
        this.instrument = instrument;
        this.instrument.volume.connect(mixer.masterVolume);
    }
    toggleMute() {
        if (this.muted) {
            this.unmuteTrack();

        } else {
            // mute
            this.muteTrack();
        }
    }
    muteTrack() {
        this.unmutedVolume = this.instrument.volume.gain.value;
        this.instrument.volume.gain.value = 0;
        this.muted = true;
    }
    unmuteTrack() {
        this.instrument.volume.gain.value = this.unmutedVolume;
        this.muted = false;
    }
    toggleSolo() {

    }

}
