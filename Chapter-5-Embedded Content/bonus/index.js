function playSample(path) {
    const audio = document.getElementById('audio-player');
    audio.src = path;
    audio.play();
}