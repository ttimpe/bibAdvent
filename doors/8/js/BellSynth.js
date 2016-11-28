class BellSynth extends Instrument {
    play() {
        var lastNote = this.currentPattern[this.currentPattern.length-1];
        var barLength = 60/player.BPM * 4;
        var patternLength = (lastNote.start*barLength) + (lastNote.length*barLength);

        console.log('Pattern is ' + patternLength + 'seconds long');
        var inst = this;
        for (var i = 0; i<inst.currentPattern.length; i++) {
            inst.playNote(inst.currentPattern[i]);
        }
        

    }
    playNote(n) {
        var tot = 1.0594630943592953;
        var freq = Math.pow(tot, n.note-49) * 440;
        console.log('freq is ' + freq);
        var osc = ac.createOscillator();
        osc.frequency.value = freq;
        var barLength = 60/player.BPM * 4;
        osc.connect(ac.destination);
        osc.start(ac.currentTime + (n.start*barLength));
        osc.stop(ac.currentTime + (n.start*barLength) + (n.length*barLength));
    }
}
