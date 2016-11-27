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
        console.log('Stopping');
        this.oscs = null;
        clearInterval(this.timer);
    }


}
