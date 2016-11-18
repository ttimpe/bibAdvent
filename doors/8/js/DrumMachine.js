class DrumMachine extends Instrument {
    play() {
        console.log('Drum machine playing');
        var currentStep = 0;

        this.timer = window.setTimeout(function() {
            if (this.currentPattern['bd'][currentStep] == 1) {
                playKick();
            }
            if (this.currentPattern['snare'][currentStep] == 1) {
                playKick();
            }
            if (this.currentPattern['ch'][currentStep] == 1) {
                playClosedHH();
            }
            if (this.currentPattern['oh'][currentStep] == 1) {
                playOpenHH();
            }
            if (this.currentPattern['cymbal'][currentStep] == 1) {
                playCymbal();
            }

            if (currentStep < 16) {
                currentStep++;
            } else {
                currentStep = 0;
            }
        }, player.BPM / 60 / 16);
    }




    playKick() {
        var osc = ac.createOscillator();
        osc.frequency = 150;
        var g = ac.createGain();
        osc.connect(g);
        g.connect(ac.destination);

        var now = ac.currentTime;

        g.gain.setValueAtTime(1, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc.start(now);
        osc.stop(now + 0.5);
    }
    playSnare() {

    }
    playClosedHH() {

    }
    playOpenHH() {

    }
    playCymbal() {

    }
}
