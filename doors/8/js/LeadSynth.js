class LeadSynth extends Instrument {
    play() {
        var lastNote = this.currentPattern[this.currentPattern.length-1];
        var barLength = 60/player.BPM * 4;
        var patternLength = (lastNote.start*barLength) + (lastNote.length*barLength);

        console.log('Pattern is ' + patternLength + 'seconds long');
        var inst = this;
        for (var i = 0; i<inst.currentPattern.length; i++) {
            inst.playNote(inst.currentPattern[i]);
        }
        this.timer = setInterval(function () {
            for (var i = 0; i<inst.currentPattern.length; i++) {
                inst.playNote(inst.currentPattern[i]);
            }
        }, patternLength * 1000);

    }
    playNote(n) {
        var tot = 1.0594630943592953;
        var freq = Math.pow(tot, n.note-49) * 440;
        console.log('freq is ' + freq);
        var osc1 = ac.createOscillator();
        osc1.frequency.value = freq;
        osc1.detune.value = -10;
        osc1.type = 'sawtooth';
        var barLength = 60/player.BPM * 4;

        var osc2 = ac.createOscillator();
        osc2.frequency.value = freq;
        osc2.type = 'triangle';
        osc2.detune.value = 10;
        var barLength = 60/player.BPM * 4;
        this.oscs.push(osc1);
        this.oscs.push(osc2);

        var g = ac.createGain();
        g.gain.setValueAtTime(0.1, (n.start*barLength) + (n.length*barLength) - 0.05);
        g.gain.linearRampToValueAtTime(0, (n.start*barLength) + (n.length*barLength));

        g.connect(this.volume);

        osc2.connect(g);
        osc2.start(ac.currentTime + (n.start*barLength));
        osc2.stop(ac.currentTime + (n.start*barLength) + (n.length*barLength));

        osc1.connect(g);
        osc1.start(ac.currentTime + (n.start*barLength));
        osc1.stop(ac.currentTime + (n.start*barLength) + (n.length*barLength));
    }
}
