class Player {

    constructor() {
        this.playState = 0;
        this.BPM = 120;
        this.song = null;
        this.playTimer = null;

    }
    play() {
        if (this.playState == 0) {
        console.log('Player playing');
        var startTime = ac.currentTime;
        for (var i = 0; i<mixer.tracks.length; i++) {
            mixer.tracks[i].instrument.play();
        }
        var that = this;
        this.setDisplayLine(0, 'PLAYING');

    this.playTimer = window.setInterval(function () {
            var secondsPassed = ac.currentTime - startTime;
            var minutes = Math.floor(secondsPassed/60);
            var seconds = Math.floor(secondsPassed - minutes*60);

            var mString;
            if (minutes < 10) {minutes = "0"+minutes;}
            if (seconds < 10) {seconds = "0"+seconds;}

           that.setDisplayLine(1, minutes + ':' + seconds);
       }, 100);
       this.playState = 1;
       this.toggleBlinkLine(0);
}
    }
    stop() {

        for (var i = 0; i<mixer.tracks.length; i++) {
            mixer.tracks[i].instrument.stop();
        }
        clearInterval(this.playTimer);
        this.setDisplayLine(1,'00:00');
        this.setDisplayLine(0, 'STOP');
        this.playState=0;
        this.toggleBlinkLine(0);

    }
    setTapeName(str) {
        document.getElementsByClassName('tape-label')[0].innerHTML=str;
    }
    setDisplayLine(i, str) {
        document.getElementsByClassName('display-line')[i].innerHTML=str;
    }
    toggleBlinkLine(i) {
        document.getElementsByClassName('display-line')[i].classList.toggle('blinking');
    }
    loadSong() {
        var that = this;
        getJSON('songs/lc.json', function(status, data) {
            that.song = data;
            that.setTapeName(that.song.title);
            for (var i=0; i<that.song.instruments.length; i++) {
                switch (that.song.instruments[i].type) {
                    case 'drums':
                    var track;
                    var inst = new DrumMachine();
                    inst.currentPattern = allPatterns[that.song.instruments[i].patterns[0]];
                    var patternName = that.song.instruments[i].patterns[0];
                    console.log('setting drum pattern to ' + patternName)
                    console.log(allPatterns);
                    console.log(allPatterns[patternName]);
                    track = new Track('Drums', inst);
                    mixer.addTrack(track);
                    break;
                    case 'bass':
                    var track;
                    var inst = new Bass();
                    inst.currentPattern = allPatterns[that.song.instruments[i].patterns[0]];
                    var patternName = that.song.instruments[i].patterns[0];
                    console.log('setting bass pattern to ' + patternName)
                    console.log(allPatterns);
                    console.log(allPatterns[patternName]);
                    track = new Track('Bass', inst);
                    mixer.addTrack(track);
                    break;
                    case 'arp_bass':
                    var track;
                    var inst = new ArpBass();
                    inst.currentPattern = allPatterns[that.song.instruments[i].patterns[0]];
                    var patternName = that.song.instruments[i].patterns[0];
                    console.log('setting ArpBass pattern to ' + patternName)
                    console.log(allPatterns);
                    console.log(allPatterns[patternName]);
                    track = new Track('Arp Bass', inst);
                    mixer.addTrack(track);
                    break;
                    case 'bells':
                    var track;
                    var inst = new BellSynth();
                    inst.currentPattern = allPatterns[that.song.instruments[i].patterns[0]];
                    var patternName = that.song.instruments[i].patterns[0];
                    console.log('setting bells pattern to ' + patternName)
                    console.log(allPatterns);
                    console.log(allPatterns[patternName]);
                    track = new Track('Bells', inst);
                    mixer.addTrack(track);
                    break;
                    case 'synth':
                    var track;
                    var inst = new LeadSynth();
                    inst.currentPattern = allPatterns[that.song.instruments[i].patterns[0]];
                    var patternName = that.song.instruments[i].patterns[0];
                    console.log('setting synth pattern to ' + patternName)
                    console.log(allPatterns);
                    console.log(allPatterns[patternName]);
                    track = new Track('Synth', inst);
                    mixer.addTrack(track);
                    break;
                }
            }

        });
        this.stop();
        this.toggleBlinkLine(0);
    }
}
