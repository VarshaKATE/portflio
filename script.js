// Toggle hamburger menu
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Add event listener to links
const links = document.querySelectorAll('.links');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
  });
});

// Add event listener to contact form
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  // Add your contact form submission logic here
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
});

// Add event listener to portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Add your portfolio item click logic here
    console.log('Portfolio item clicked!');
  });
});