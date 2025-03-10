window.addEventListener('scroll', function () {
  requestAnimationFrame(() => {
      let header = document.querySelector('.header');
      if (header) {
          header.classList.toggle('scrolled', window.scrollY > 50);
      }
  });
});



document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting to a server

    // Clear the form fields
    this.reset();

    alert('Thank you for your message. I will get back to you shortly!');
  });

