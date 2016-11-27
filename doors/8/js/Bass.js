class Bass extends Instrument {
    play() {
        for (var i = 0; i<this.currentPattern.length; i++) {
            this.playNote(this.currentPattern[i]);
        }

    }

    playNote(n) {
        //var freq = 2(m−69)/12(440 Hz)
        var tot = 1.0594630943592953;
        var freq = Math.pow(tot, n.note-49) * 440;
        console.log('freq is ' + freq);
        var osc = ac.createOscillator();
        osc.frequency.value = freq;
        osc.connect(ac.destination);
        osc.start(ac.currentTime + (1/(player.BPM/60*0.25*n.start)));
        osc.stop(ac.currentTime +  (1/(player.BPM/60*0.25*n.start)) + (1/(player.song.BPM/60*0.25*n.length)));
    }
}
