
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Feather icons
  feather.replace();
  
  // Set current year in footer
  document.getElementById('current-year').innerText = new Date().getFullYear();
  
  // Header scroll effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll('.mobile-menu .nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });
  });
  
  // Project filter functionality
  let displayCount = 6;
  let activeCategory = 'all';
  let searchTerm = '';
  
  // Category filter buttons
  const filterButtons = document.querySelectorAll('[data-filter]');
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-filter');
      activeCategory = category;
      resetActiveClass(filterButtons, this);
      displayCount = 3;
      renderProjects();
    });
  });
  
  // Search functionality
  const searchInput = document.getElementById('project-search');
  searchInput.addEventListener('input', function() {
    searchTerm = this.value.toLowerCase();
    displayCount = 3;
    renderProjects();
  });
  
  // Load more button
  const loadMoreBtn = document.getElementById('load-more-btn');
  loadMoreBtn.addEventListener('click', function() {
    displayCount = 99; // Show all projects
    renderProjects();
    this.style.display = 'none';
  });
  
  // Function to render projects
  function renderProjects() {
    const projectGrid = document.getElementById('project-grid');
    projectGrid.innerHTML = '';
    
    const filteredProjects = projectsData.filter(project => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm) || 
                           project.description.toLowerCase().includes(searchTerm) ||
                           project.techStack.some(tech => tech.toLowerCase().includes(searchTerm));
      
      return matchesCategory && matchesSearch;
    });
    
    const visibleProjects = filteredProjects.slice(0, displayCount);
    
    if (visibleProjects.length === 0) {
      projectGrid.innerHTML = `
        <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 3rem 0;">
          <p>No projects found matching your criteria.</p>
        </div>
      `;
      loadMoreBtn.style.display = 'none';
      return;
    }
    
    visibleProjects.forEach((project, index) => {
      const projectCard = createProjectCard(project, index);
      projectGrid.appendChild(projectCard);
    });
    
    feather.replace();
    loadMoreBtn.style.display = filteredProjects.length > displayCount ? 'inline-block' : 'none';
  }
  
  // Initialize projects
  renderProjects();

  // Function to create a project card
  function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Create stars HTML based on rating
    const starsHTML = createStarRating(project.rating);
    
    card.innerHTML = `
      <div class="project-image">
        <img src="${project.imageUrl}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-content">
        <div class="project-header">
          <h3 class="project-title">${project.title}</h3>
          <span class="project-category">${project.category}</span>
        </div>
        <div class="project-meta">
          <span class="project-date">
            <i data-feather="calendar"></i>
            ${project.date}
          </span>
          <span class="project-rating">
            ${starsHTML}
          </span>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.techStack.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-actions">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
            <i data-feather="github"></i>
            GitHub
          </a>
          <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <i data-feather="external-link"></i>
            Live Demo
          </a>
        </div>
      </div>
    `;    
    return card;
  }
  
  // Create star rating display
  function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
      starsHTML += '<i data-feather="star" class="filled-star"></i>';
    }
    
    if (hasHalfStar) {
      starsHTML += '<i data-feather="star" class="half-star"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      starsHTML += '<i data-feather="star" class="empty-star"></i>';
    }
    
    return starsHTML;
  }
  
  // Skills tabs functionality
  const skillTabs = document.querySelectorAll('.skills-tabs .tab-btn');
  const skillContents = document.querySelectorAll('.tab-content');
  
  skillTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      resetActiveClass(skillTabs, this);
      
      skillContents.forEach(content => {
        content.classList.remove('active');
      });
      
      document.getElementById(tabId).classList.add('active');
      
      // Initialize skill bars animation
      initSkillBars(tabId);
    });
  });
  
  // Initialize skill bars for the default tab
  initSkillBars('frontend');
  
  function initSkillBars(category) {
    const skillsContainer = document.getElementById(category);
    
    if (!skillsContainer.hasAttribute('data-initialized')) {
      const skillsGrid = skillsContainer.querySelector('.skill-grid');
      skillsGrid.innerHTML = '';
      
      const skills = skillsData[category];
      skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
          <div class="skill-header">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-level">${skill.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" style="width: 0%"></div>
          </div>
        `;
        skillsGrid.appendChild(skillItem);
      });
      
      // Add a small delay before animating skill bars
      setTimeout(() => {
        const progressBars = skillsContainer.querySelectorAll('.skill-progress');
        progressBars.forEach((bar, index) => {
          const skill = skills[index];
          bar.style.width = `${skill.level}%`;
        });
      }, 300);
      
      skillsContainer.setAttribute('data-initialized', true);
    }
  }
  
  // Testimonials slider
  let currentSlide = 0;
  const testimonialTrack = document.getElementById('testimonial-track');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  
  // Initialize testimonials
  testimonialsData.forEach(testimonial => {
    const slide = document.createElement('div');
    slide.className = 'testimonial';
    slide.innerHTML = `
      <img src="${testimonial.avatarUrl}" alt="${testimonial.name}" class="testimonial-avatar">
      <p class="testimonial-content">"${testimonial.content}"</p>
      <h4 class="testimonial-name">${testimonial.name}</h4>
      <p class="testimonial-position">${testimonial.role}</p>
    `;
    testimonialTrack.appendChild(slide);
  });
  
  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = testimonialsData.length - 1;
    }
    updateSlider();
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentSlide < testimonialsData.length - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    updateSlider();
  });
  
  function updateSlider() {
    testimonialTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  
  // Resume download button
  const downloadBtn = document.getElementById('download-btn');
  downloadBtn.addEventListener('click', function(e) {
    // Prevent default only if the actual file doesn't exist
    // e.preventDefault(); // Uncomment this line for the demo
    
    // Show loading state
    const originalText = this.innerHTML;
    this.innerHTML = `
      <div class="loading-spinner"></div>
      Downloading...
    `;
    
    // Simulate download delay (remove in production)
    setTimeout(() => {
      this.innerHTML = originalText;
      showToast('Resume downloaded successfully!');
    }, 1500);
  });
  
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<div class="loading-spinner"></div> Sending...';
  submitBtn.disabled = true;

  const formData = new FormData(contactForm);

  // Send form data to Formspree using fetch
  fetch(contactForm.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        contactForm.reset();
        showToast('Message sent successfully!');
      } else {
        throw new Error('There was an issue with sending your message.');
      }
    })
    .catch(error => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      showToast('Error sending message. Please try again later.');
      console.error('Error:', error);
    });
});



  // Toast notification function
  function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    
    toastMessage.textContent = message;
    toast.classList.add('active');
    
    setTimeout(() => {
      toast.classList.remove('active');
    }, 3000);
  }
  
  // Helper function to reset active class
  function resetActiveClass(elements, activeElement) {
    elements.forEach(element => {
      element.classList.remove('active');
    });
    activeElement.classList.add('active');
  }
  
  // Active nav link highlighting based on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  function setActiveNavLink() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', setActiveNavLink);
  
  // Initialize active nav link on page load
  setActiveNavLink();
});
