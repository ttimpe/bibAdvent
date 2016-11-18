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
        getJSON('songs/lc.json', function(status, data) {
            that.song = data;
            for (var i=0; i<that.song.instruments.length; i++) {
                switch (that.song.instruments[i].type) {
                    case 'drums':
                    var inst = new DrumMachine();
                    track = new Track('Drums', inst);
                    mixer.addTrack(track);
                    break;
                }
            }

        });
    }
}
