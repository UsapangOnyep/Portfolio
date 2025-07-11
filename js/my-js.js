function nextSlide(button) {
    const carousel = button.closest(".carousel");
    const track = carousel.querySelector(".carousel-images");
    const images = track.querySelectorAll("img");
    const currentIndex = +track.dataset.index || 0;
    const nextIndex = (currentIndex + 1) % images.length;
    track.style.transform = `translateX(-${nextIndex * 100}%)`;
    track.dataset.index = nextIndex;
}

function prevSlide(button) {
    const carousel = button.closest(".carousel");
    const track = carousel.querySelector(".carousel-images");
    const images = track.querySelectorAll("img");
    const currentIndex = +track.dataset.index || 0;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    track.style.transform = `translateX(-${prevIndex * 100}%)`;
    track.dataset.index = prevIndex;
}

const navLinks = document.querySelectorAll('.profile-nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      document.querySelector('.profile-nav a.active')?.classList.remove('active');
      this.classList.add('active');
    });
  });
