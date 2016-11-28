class DrumMachine extends Instrument {

    play() {

        console.log('Drum machine playing');
        var currentStep = 0;
        console.log(this.currentPattern);
        var inst = this;
        console.log('interval ' +  1/(player.BPM/60*4));
        this.oscs= [];
        //console.log('step ' + currentStep);
        if (inst.currentPattern['bd'][currentStep] == 1) {
            inst.playKick();
        }
        if (inst.currentPattern['snare'][currentStep] == 1) {
            inst.playSnare();
        }
        if (inst.currentPattern['ch'][currentStep] == 1) {
            inst.playClosedHH();
        }
        if (inst.currentPattern['oh'][currentStep] == 1) {
            inst.playOpenHH();
        }
        if (inst.currentPattern['cymbal'][currentStep] == 1) {
            inst.playCymbal();
        }

        if (currentStep < 15) {
            currentStep++;
        } else {
            currentStep = 0;
        }

        this.timer = window.setInterval(function() {
            this.oscs= [];
            //console.log('step ' + currentStep);
            if (inst.currentPattern['bd'][currentStep] == 1) {
                inst.playKick();
            }
            if (inst.currentPattern['snare'][currentStep] == 1) {
                inst.playSnare();
            }
            if (inst.currentPattern['ch'][currentStep] == 1) {
                inst.playClosedHH();
            }
            if (inst.currentPattern['oh'][currentStep] == 1) {
                inst.playOpenHH();
            }
            if (inst.currentPattern['cymbal'][currentStep] == 1) {
                inst.playCymbal();
            }

            if (currentStep < 15) {
                currentStep++;
            } else {
                currentStep = 0;
            }
        }, 1/(player.BPM/60*4) * 1000);

    }




    playKick() {
        console.log('kick');
        var osc = ac.createOscillator();
        osc.frequency.value = 150;
        var g = ac.createGain();
        osc.connect(g);
        g.connect(ac.destination);

        var now = ac.currentTime;
        osc.start(now);
        osc.stop(now + (1/(player.BPM/60*4)));
    }
    playSnare() {
 var noiseBufferOutput = noiseBuffer.getChannelData(0);
 for (var i = 0; i < 44100; i++)
 {
     noiseBufferOutput[i] = Math.random() * 2 - 1;
 }
        var time = ac.currentTime;
        console.log('snare');
        var noise = ac.createBufferSource();
       noise.buffer = noiseBuffer;
       var noiseFilter = ac.createBiquadFilter();
       noiseFilter.type = 'highpass';
       noiseFilter.frequency.value = 1000;
       noise.connect(noiseFilter);
       var noiseEnvelope = ac.createGain();
       noiseFilter.connect(noiseEnvelope);
       noiseEnvelope.connect(ac.destination);
       var osc = ac.createOscillator();
       osc.type = 'triangle';
       var oscEnvelope = ac.createGain();
       osc.connect(oscEnvelope);
       oscEnvelope.connect(ac.destination);
       noiseEnvelope.gain.setValueAtTime(1, time);
       noiseEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.2);
       noise.start(time);
       osc.frequency.setValueAtTime(100, time);
       oscEnvelope.gain.setValueAtTime(0.7, time);
       oscEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
       osc.start(time);
       osc.stop(time + 0.2);
       noise.stop(time + 0.2);
    }
    playClosedHH() {

        console.log('Closed HH');
        var noise = ac.createBufferSource();
        noise.buffer = noiseBuffer;
var noiseEnvelope = ac.createGain();
noiseEnvelope.connect(ac.destination);
noiseEnvelope.gain.setValueAtTime(0.7, ac.currentTime);
noiseEnvelope.gain.exponentialRampToValueAtTime(0.5, ac.currentTime + 0.05);
noiseEnvelope.gain.exponentialRampToValueAtTime(0.01, ac.currentTime + 0.1);
noise.connect(noiseEnvelope);
noise.start(ac.currentTime);
noise.stop(ac.currentTime + 0.1);
    }
    playOpenHH() {
        console.log('Open HH');

    }
    playCymbal() {
        console.log('Cymbal');

    }
}
