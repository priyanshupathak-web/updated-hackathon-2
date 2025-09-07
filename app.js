// Agricultural data from the provided JSON
const agriculturalData = {
  "agriculturalProblems": [
    {
      "problem": "Climate Change & Environmental Degradation",
      "description": "Unpredictable weather patterns, drought, hail, waterlogging, and temperature extremes reduce crop yields",
      "solution": "Climate-resilient farming with drought-tolerant varieties, conservation agriculture, satellite monitoring",
      "impactReduction": "35% yield stability increase",
      "technology": "Satellite monitoring, conservation agriculture"
    },
    {
      "problem": "Soil Degradation & Erosion", 
      "description": "Loss of arable land due to erosion, salinization, nutrient depletion reducing crop vigor",
      "solution": "Contour plowing, terracing, cover cropping, crop rotation, agroforestry",
      "impactReduction": "40% erosion reduction",
      "technology": "Soil moisture monitoring, satellite imagery"
    },
    {
      "problem": "Water Scarcity & Mismanagement",
      "description": "Inefficient irrigation, dwindling groundwater, over-reliance on monsoon rains",
      "solution": "Precision irrigation, drip systems, rainwater harvesting, soil moisture sensors",
      "impactReduction": "50% water savings",
      "technology": "IoT sensors, precision irrigation"
    },
    {
      "problem": "Pest & Disease Management",
      "description": "Pests and diseases devastate crops, excessive pesticide use harms environment",
      "solution": "Integrated Pest Management (IPM), biological control, disease-resistant varieties",
      "impactReduction": "25% pesticide reduction",
      "technology": "Remote sensing, AI-based disease prediction"
    },
    {
      "problem": "Labor Shortages & Aging Workforce",
      "description": "Lack of skilled workers, aging population, rising labor costs",
      "solution": "Agricultural automation, robotics, digital training programs",
      "impactReduction": "30% operational efficiency increase",
      "technology": "Autonomous tractors, harvesting robots"
    },
    {
      "problem": "Limited Access to Technology",
      "description": "Outdated farming methods, poor access to modern tools and information",
      "solution": "Mobile agriculture services, AI advisory, IoT implementation",
      "impactReduction": "20% productivity improvement", 
      "technology": "mAgri services, AI platforms, satellite data"
    },
    {
      "problem": "Post-Harvest Losses",
      "description": "Up to 30% produce lost due to poor storage, processing, transport",
      "solution": "Cold storage facilities, modern processing, training in handling",
      "impactReduction": "30% loss reduction",
      "technology": "Temperature-controlled storage, logistics planning"
    },
    {
      "problem": "Economic Constraints & Market Access",
      "description": "High production costs, unstable prices, limited market access",
      "solution": "Cooperatives, better infrastructure, direct market linkages",
      "impactReduction": "30% income increase",
      "technology": "Digital marketplaces, rural connectivity"
    }
  ],
  "weatherImportance": [
    {
      "aspect": "Crop Planning",
      "description": "Weather forecasts help determine optimal planting and sowing dates"
    },
    {
      "aspect": "Irrigation Management", 
      "description": "Precise rainfall predictions enable efficient water usage and scheduling"
    },
    {
      "aspect": "Pest Control",
      "description": "Weather conditions predict pest and disease outbreaks for timely intervention"
    },
    {
      "aspect": "Fertilizer Application",
      "description": "Weather timing ensures optimal nutrient uptake and reduces runoff"
    },
    {
      "aspect": "Harvest Planning",
      "description": "Weather forecasts help plan harvesting to avoid quality deterioration"
    }
  ],
  "cropCalendar": [
    {
      "month": "January",
      "crops": ["Tomato", "Capsicum", "Cauliflower", "Cabbage", "Spinach"],
      "season": "Winter/Rabi",
      "temperature": "15-25°C",
      "sowingMethod": "Seed tray/Direct"
    },
    {
      "month": "February", 
      "crops": ["Tomato", "Brinjal", "Chilli", "Okra", "Carrot"],
      "season": "Winter/Rabi",
      "temperature": "18-30°C",
      "sowingMethod": "Seed tray/Direct"
    },
    {
      "month": "March",
      "crops": ["Cucumber", "Bitter Gourd", "Ridge Gourd", "Pumpkin", "Beans"],
      "season": "Spring/Zaid",
      "temperature": "20-35°C", 
      "sowingMethod": "Direct sowing"
    },
    {
      "month": "April",
      "crops": ["Bottle Gourd", "French Beans", "Brinjal", "Chilli", "Okra"],
      "season": "Summer/Zaid",
      "temperature": "22-35°C",
      "sowingMethod": "Direct sowing"
    },
    {
      "month": "May",
      "crops": ["Okra", "Cucumber", "Cluster Beans", "Amaranthus"],
      "season": "Summer/Zaid", 
      "temperature": "25-38°C",
      "sowingMethod": "Direct sowing"
    },
    {
      "month": "June",
      "crops": ["Bottle Gourd", "Ridge Gourd", "Snake Gourd", "Corn"],
      "season": "Monsoon/Kharif",
      "temperature": "25-35°C",
      "sowingMethod": "Direct sowing"
    },
    {
      "month": "July",
      "crops": ["Tomato", "Brinjal", "Okra", "Cucumber", "Rice"],
      "season": "Monsoon/Kharif",
      "temperature": "25-35°C", 
      "sowingMethod": "Direct/Transplant"
    },
    {
      "month": "August",
      "crops": ["Spinach", "Coriander", "Lettuce", "Radish"],
      "season": "Late Monsoon",
      "temperature": "20-30°C",
      "sowingMethod": "Seed tray/Direct"
    },
    {
      "month": "September",
      "crops": ["Carrot", "Beetroot", "Turnip", "Spinach"],
      "season": "Post-Monsoon",
      "temperature": "18-28°C",
      "sowingMethod": "Seed tray/Direct"
    },
    {
      "month": "October",
      "crops": ["Peas", "Radish", "Fenugreek", "Mustard Greens", "Wheat"],
      "season": "Winter/Rabi",
      "temperature": "15-25°C",
      "sowingMethod": "Direct sowing"
    },
    {
      "month": "November", 
      "crops": ["Cauliflower", "Cabbage", "Broccoli", "Carrot"],
      "season": "Winter/Rabi",
      "temperature": "12-22°C",
      "sowingMethod": "Seed tray/Transplant"
    },
    {
      "month": "December",
      "crops": ["Onion", "Garlic", "Spinach", "Turnip"],
      "season": "Winter/Rabi", 
      "temperature": "10-20°C",
      "sowingMethod": "Seed tray/Direct"
    }
  ],
  "seasons": {
    "kharif": {
      "period": "June-October",
      "description": "Monsoon crops grown with rainy season, harvested in autumn",
      "examples": ["Rice", "Maize", "Cotton", "Sugarcane", "Pulses"]
    },
    "rabi": {
      "period": "November-April", 
      "description": "Winter crops sown after monsoon, harvested in spring",
      "examples": ["Wheat", "Barley", "Peas", "Gram", "Mustard"]
    },
    "zaid": {
      "period": "March-June",
      "description": "Summer crops grown with irrigation between rabi and kharif",
      "examples": ["Watermelon", "Cucumber", "Fodder crops"]
    }
  }
};


// Global variables
let currentSection = 'home';

// DOM utility functions
function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

// Navigation functionality
function initNavigation() {
  const navLinks = $$('.nav__link');
  const sections = $$('.section');
  const overviewButtons = $$('[data-section]');

  // Handle navigation link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = link.getAttribute('data-section');
      showSection(targetSection);
    });
  });

  // Handle overview card button clicks
  overviewButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetSection = button.getAttribute('data-section');
      showSection(targetSection);
    });
  });

  // Mobile menu toggle
  const mobileMenuToggle = $('#mobileMenuToggle');
  const nav = $('.nav');
  
  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    });
  }
}

function showSection(sectionId) {
  // Hide all sections
  const sections = $$('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Show target section
  const targetSection = $(`#${sectionId}`);
  if (targetSection) {
    targetSection.classList.add('active');
    targetSection.classList.add('fade-in');
  }

  // Update navigation active state
  const navLinks = $$('.nav__link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-section') === sectionId) {
      link.classList.add('active');
    }
  });

  currentSection = sectionId;

  // Update URL hash
  window.location.hash = sectionId;

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Load and render agricultural problems
function loadAgriculturalProblems() {
  const problemsGrid = $('#problemsGrid');
  if (!problemsGrid) return;

  const problemsHTML = agriculturalData.agriculturalProblems.map(problem => {
    return `
      <div class="problem-card">
        <h3>${problem.problem}</h3>
        <p class="problem-description">${problem.description}</p>
        <div class="problem-solution">
          <h4>Solution</h4>
          <p>${problem.solution}</p>
        </div>
        <div class="problem-stats">
          <div class="stat-item">
            <div class="stat-label">Impact Reduction</div>
            <div class="stat-value">${problem.impactReduction}</div>
          </div>
          <div class="stat-item">
            <div class="stat-label">Technology</div>
            <div class="stat-value">${problem.technology}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  problemsGrid.innerHTML = problemsHTML;
}

// Load and render weather importance
function loadWeatherImportance() {
  const weatherContainer = $('#weatherImportance');
  if (!weatherContainer) return;

  const weatherHTML = agriculturalData.weatherImportance.map(item => {
    return `
      <div class="weather-card">
        <h3>${item.aspect}</h3>
        <p>${item.description}</p>
      </div>
    `;
  }).join('');

  weatherContainer.innerHTML = weatherHTML;
}

// Load and render seasons overview
function loadSeasonsOverview() {
  const seasonsContainer = $('#seasonsOverview');
  if (!seasonsContainer) return;

  const seasons = agriculturalData.seasons;
  const seasonsHTML = Object.entries(seasons).map(([key, season]) => {
    const exampleTags = season.examples.map(crop => 
      `<span class="crop-tag">${crop}</span>`
    ).join('');

    return `
      <div class="season-card">
        <h3>${key.charAt(0).toUpperCase() + key.slice(1)} Season</h3>
        <div class="season-period">${season.period}</div>
        <p>${season.description}</p>
        <div class="season-examples">
          <h4>Example Crops:</h4>
          <div class="crop-tags">${exampleTags}</div>
        </div>
      </div>
    `;
  }).join('');

  seasonsContainer.innerHTML = seasonsHTML;
}

// Load and render crop calendar
function loadCropCalendar(filterMonth = '') {
  const cropCalendarContainer = $('#cropCalendar');
  if (!cropCalendarContainer) return;

  let cropData = agriculturalData.cropCalendar;
  
  // Filter by month if specified
  if (filterMonth) {
    cropData = cropData.filter(item => item.month === filterMonth);
  }

  const cropHTML = cropData.map(monthData => {
    const cropItems = monthData.crops.map(crop => 
      `<span class="crop-item">${crop}</span>`
    ).join('');

    return `
      <div class="crop-month-card">
        <div class="crop-month-header">
          <h3>${monthData.month}</h3>
        </div>
        <div class="crop-month-body">
          <div class="crop-info-row">
            <span class="crop-info-label">Season:</span>
            <span class="season-badge">${monthData.season}</span>
          </div>
          <div class="crop-info-row">
            <span class="crop-info-label">Temperature:</span>
            <span class="crop-info-value">${monthData.temperature}</span>
          </div>
          <div class="crop-info-row">
            <span class="crop-info-label">Sowing Method:</span>
            <span class="crop-info-value">${monthData.sowingMethod}</span>
          </div>
          <div class="crop-list">
            <h4>Crops to Plant:</h4>
            <div class="crop-items">${cropItems}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  cropCalendarContainer.innerHTML = cropHTML;
}

// Initialize crop calendar filter
function initCropFilter() {
  const monthFilter = $('#monthFilter');
  if (!monthFilter) return;

  monthFilter.addEventListener('change', (e) => {
    const selectedMonth = e.target.value;
    loadCropCalendar(selectedMonth);
  });
}

// Editable links functionality
function initEditableLinks() {
  const editableLinks = $$('.editable-link');
  
  editableLinks.forEach(link => {
    // Load saved content from localStorage
    const linkKey = `link_${link.textContent.trim().replace(/\s+/g, '_')}`;
    const savedHref = localStorage.getItem(`${linkKey}_href`);
    const savedText = localStorage.getItem(`${linkKey}_text`);
    
    if (savedHref) link.href = savedHref;
    if (savedText) link.textContent = savedText;

    // Handle content editing
    link.addEventListener('blur', () => {
      const newText = link.textContent.trim();
      const newHref = link.href;
      
      if (newText) {
        localStorage.setItem(`${linkKey}_text`, newText);
        localStorage.setItem(`${linkKey}_href`, newHref);
      }
    });

    // Allow editing href by double-clicking
    link.addEventListener('dblclick', (e) => {
      e.preventDefault();
      const currentHref = link.href;
      const newHref = prompt('Edit URL:', currentHref);
      
      if (newHref && newHref !== currentHref) {
        link.href = newHref;
        localStorage.setItem(`${linkKey}_href`, newHref);
      }
    });

    // Prevent navigation when editing
    link.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        link.blur();
      }
    });
  });
}

// Handle URL hash navigation
function initHashNavigation() {
  // Handle initial hash
  const initialHash = window.location.hash.slice(1);
  if (initialHash && ['home', 'problems', 'weather', 'crops'].includes(initialHash)) {
    showSection(initialHash);
  }

  // Handle hash changes
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    if (hash && ['home', 'problems', 'weather', 'crops'].includes(hash)) {
      showSection(hash);
    }
  });
}

// Search functionality for crops (basic implementation)
function initSearch() {
  // This could be enhanced with a proper search input
  // For now, we'll use the month filter as the search mechanism
  console.log('Search functionality initialized via month filter');
}

// Accessibility improvements
function initAccessibility() {
  // Add keyboard navigation support
  const focusableElements = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  
  focusableElements.forEach(element => {
    if (!element.getAttribute('role')) {
      if (element.tagName === 'BUTTON') {
        element.setAttribute('role', 'button');
      }
    }
  });

  // Add ARIA labels where needed
  const navLinks = $$('.nav__link');
  navLinks.forEach(link => {
    const section = link.getAttribute('data-section');
    if (section) {
      link.setAttribute('aria-label', `Navigate to ${section} section`);
    }
  });
}

// Performance optimization - lazy loading
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  });

  // Observe cards for animation
  const cards = $$('.card, .problem-card, .weather-card, .season-card, .crop-month-card');
  cards.forEach(card => observer.observe(card));
}

// Error handling
function handleErrors() {
  window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
  });

  // Handle failed resource loads
  window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
  });
}

// Initialize application
function initApp() {
  try {
    // Initialize core functionality
    initNavigation();
    initHashNavigation();
    
    // Load content
    loadAgriculturalProblems();
    loadWeatherImportance();
    loadSeasonsOverview();
    loadCropCalendar();
    
    // Initialize features
    initCropFilter();
    initEditableLinks();
    initSearch();
    initAccessibility();
    
    // Initialize performance optimizations
    observeElements();
    
    // Initialize error handling
    handleErrors();
    
    console.log('AgriTech Solutions app initialized successfully');
    
  } catch (error) {
    console.error('Failed to initialize app:', error);
    
    // Show error message to user
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--color-error);
      color: white;
      padding: 16px;
      border-radius: 8px;
      z-index: 1000;
    `;
    errorDiv.textContent = 'Application failed to load. Please refresh the page.';
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
      errorDiv.remove();
    }, 5000);
  }
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Export for debugging (if needed)
window.AgriTechApp = {
  showSection,
  loadCropCalendar,
  agriculturalData
};