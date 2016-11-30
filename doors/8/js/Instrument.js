class Instrument {

    constructor(track) {
        this.currentPattern;
        this.track = track;
        this.oscs = [];
        this.timer = null;
        this.volume = ac.createGain();

    }
    play() {

    }
    stop() {
        console.log('Stopping');
        for (var i =0; i<this.oscs.length; i++) {

            this.oscs[i].disconnect();

        }
        this.oscs = [];
        clearInterval(this.timer);
    }


}
