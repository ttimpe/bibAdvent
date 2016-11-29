var playButton;
var stopButton;
var masterFader;
var mixer;
var player;


var allPatternFiles = ['bass_main', 'bells_main', 'drums_main', 'drums_break', 'synth_main'];
var allPatterns = [];
var pIndex = 0;

var ac;



function init() {
    playButton = document.getElementById('playButton');
    stopButton = document.getElementById('stopButton');
    masterFader = document.getElementById('masterFader');


    playButton.addEventListener('click', onPlay);
    stopButton.addEventListener('click', onStop);
    masterFader.addEventListener('change', onMasterVolumeChange);


        // SET UP INSTRUMENTS
        ac = new AudioContext();

    mixer = new Mixer(document.getElementById('mixer-container'));
    player = new Player();



    loadPattern(0);

    noiseBuffer = ac.createBuffer(1, 44100, 44100);  // 44100 is a standard sample rate for most sound cards




}



function onPlay() {
    console.log('Hit Play');
    player.play();

}
function onStop() {
    console.log('Hit Stop');
    player.stop();
}

function onMasterVolumeChange(e) {
    mixer.masterVolume.gain.value = masterFader.value / 100;
}

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "json";
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};



function loadPattern(index) {

    getJSON('patterns/' + allPatternFiles[index] + '.json', function(status, data) {
        allPatterns[allPatternFiles[index]] = data;
        console.log('Pattern ' + allPatternFiles[index] + ' loaded');
        if (pIndex < (allPatternFiles.length -1)) {
            pIndex = pIndex + 1;
            loadPattern(pIndex);

        } else {
            console.log('all patterns loaded');
            player.loadSong();

        }
    });

}
