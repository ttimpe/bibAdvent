class Player {

    constructor() {
        this.playState = 0;
        this.BPM = 120;
        this.song = null;
    }
    play() {
        console.log('Player playing');
        for (var i = 0; i<mixer.tracks.length; i++) {
            mixer.tracks[i].instrument.play();
        }
    }
    stop() {
        for (var i = 0; i<mixer.tracks.length; i++) {
            mixer.tracks[i].instrument.stop();
        }
    }
    loadSong() {
        var that = this;
        getJSON('songs/b8.json', function(status, data) {
            that.song = data;
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
    }
}
