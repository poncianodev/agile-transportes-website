// NAV BAR

window.onload = function () {
  window.addEventListener('scroll', e => {
    if (window.pageYOffset > 100) {
      document.querySelector('header').classList.add('header-scroll');
      document.querySelector('#nav-logo').style.height = '3rem';
    } else {
      document.querySelector('header').classList.remove('header-scroll');
      document.querySelector('#nav-logo').style.height = '5rem';
    }
  });
};

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

// MAPA BRASIL

const description = document.querySelector('.tooltip');

document.querySelectorAll('path').forEach(el =>
  el.addEventListener('mouseover', event => {
    event.target.className = 'enabled';
    description.classList.add('active');
    description.innerHTML = event.target.id;
  })
);

document.querySelectorAll('path').forEach(el =>
  el.addEventListener('mouseout', () => {
    description.classList.remove('active');
  })
);

document.onmousemove = e => {
  description.style.left = e.pageX + 'px';
  description.style.top = e.pageY - 70 + 'px';
};