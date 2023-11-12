let heroVideo = document.getElementById('hero-video');

heroVideo.currentTime = 20;

heroVideo.addEventListener('ended', () => {
    heroVideo.currentTime = 162;
  });

heroVideo.play();