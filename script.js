function closeChatBox() {
    document.getElementById('chatBox').style.display = 'none';
  }

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.toggle-chat').addEventListener('click', function () {
      document.getElementById('chatBox').style.display = 'block';
    });
  });


  //carousel
  let currentSlide = 0;

  function showSlide() {
      const slider = document.querySelector('div[style*="transform"]');
      slider.style.transform = `translateX(${-currentSlide * 25}%)`;
  }

  function nextSlide() {
      if (currentSlide < 5) { // Adjust according to the number of slides
          currentSlide++;
          showSlide();
      }
  }

  function prevSlide() {
      if (currentSlide > 0) {
          currentSlide--;
          showSlide();
      }
  }


