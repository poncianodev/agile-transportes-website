// DURAÇÃO DO VÍDEO HEADER

let heroVideo = document.getElementById('hero-video');

heroVideo.currentTime = 20;

heroVideo.addEventListener('timeupdate', () => {
  if (heroVideo.currentTime > 130) {
    heroVideo.currentTime = 0;
  }
});

heroVideo.play();

// MENU MOBILE

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.close-btn');

  menuBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});
