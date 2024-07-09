window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    
    const video = document.getElementById('video');
    const videoPlayer = document.getElementById('video-player');
    const marker = document.getElementById('marker');

    marker.addEventListener('markerFound', () => {
        console.log('Marker found');
        video.style.display = 'block';
        video.play();
        fadeInVideo();
    });

    marker.addEventListener('markerLost', () => {
        console.log('Marker lost');
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
        console.log('Video play event');
        const texture = new THREE.VideoTexture(video);
        videoPlayer.setAttribute('material', 'src', texture);
    });
});
