// Custom JavaScript for improved interactivity

document.addEventListener('DOMContentLoaded', function() {
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add fade-in animation to elements as they come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animateElements = document.querySelectorAll('.publication-item, .news-item, .experience-item, .interest-card');
  animateElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
  
  // Add hover effect to publication items
  const pubItems = document.querySelectorAll('.publication-item');
  pubItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Animate hero section on page load
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    setTimeout(() => {
      heroSection.classList.add('hero-animate');
    }, 100);
  }
  
  // Add dynamic year counter for news items
  const newsItems = document.querySelectorAll('.news-item');
  let currentYear = null;
  newsItems.forEach(item => {
    const yearSpan = item.querySelector('.news-date');
    if (yearSpan) {
      const year = yearSpan.textContent;
      if (year !== currentYear) {
        currentYear = year;
        item.classList.add('year-divider');
      }
    }
  });
  
  // Add copy-to-clipboard for code blocks
  const codeBlocks = document.querySelectorAll('pre code');
  codeBlocks.forEach(block => {
    const button = document.createElement('button');
    button.className = 'copy-code-btn';
    button.textContent = 'Copy';
    button.addEventListener('click', function() {
      navigator.clipboard.writeText(block.textContent).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      });
    });
    block.parentElement.style.position = 'relative';
    block.parentElement.appendChild(button);
  });
  
  // Typing effect for tagline
  const tagline = document.querySelector('.tagline');
  if (tagline) {
    const text = tagline.textContent;
    tagline.textContent = '';
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        tagline.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }
    setTimeout(typeWriter, 500);
  }
  
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const heroSection = document.querySelector('.hero-section');
  if (heroSection && scrolled < 500) {
    heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    heroSection.style.opacity = 1 - (scrolled * 0.002);
  }
});