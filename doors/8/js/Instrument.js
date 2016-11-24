class Instrument {

    constructor(track) {
        this.currentPattern;
        this.track = track;
        this.oscs = [];
        this.timer = null;

    }
    play() {

    }
    stop() {
        this.oscs = null;
        clearInterval(this.timer);
    }


}
