document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth >= 768) {
        // Blackhole video
        const blackholeVideo = document.querySelector('.blackhole-custom video');
        blackholeVideo.src = "videos/blackhole.mp4";

        // Hero video
        const heroVideo = document.querySelector('.hero-vid-box video');
        heroVideo.src = "videos/hero-video.mp4";
    }
});