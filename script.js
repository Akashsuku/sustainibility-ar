window.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const videoPlayer = document.getElementById('video-player');
    const marker = document.getElementById('marker');

    marker.addEventListener('markerFound', () => {
        video.style.display = 'block';
        video.play();
        fadeInVideo();
    });

    marker.addEventListener('markerLost', () => {
        video.pause();
        video.style.display = 'none';
        videoPlayer.setAttribute('material', 'opacity', 0.0);
    });

    function fadeInVideo() {
        let opacity = 0.0;
        const interval = setInterval(() => {
            opacity += 0.05;
            videoPlayer.setAttribute('material', 'opacity', opacity);
            if (opacity >= 1.0) {
                clearInterval(interval);
            }
        }, 100);
    }

    video.addEventListener('play', () => {
        const texture = new THREE.VideoTexture(video);
        videoPlayer.setAttribute('material', 'src', texture);
    });
});
