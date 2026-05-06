// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// project tabs
const tabButtons = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll(".project-panel");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");

    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    panels.forEach((panel) => {
      if (panel.id === target) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  });
});

// Impact counters (simple animation)
const counters = document.querySelectorAll(".impact-number");
let countersStarted = false;

function animateCounters() {
  if (countersStarted) return;
  const triggerPoint = window.innerHeight * 0.8;

  counters.forEach((counter) => {
    const rect = counter.getBoundingClientRect();
    if (rect.top < triggerPoint) {
      const target = parseInt(counter.getAttribute("data-count"), 10);
      let current = 0;
      const increment = Math.max(1, Math.floor(target / 80));

      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        counter.textContent = current;
      }, 20);
    }
  });

  countersStarted = true;
}

window.addEventListener("scroll", animateCounters);
window.addEventListener("load", animateCounters);

// Contact form (simple front-end feedback)
const contactForm = document.querySelector(".contact-form");
const formNote = document.getElementById("formNote");

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formNote.textContent = "Thank you for your enquiry. We’ll be in touch shortly.";
    formNote.style.color = "#3ddc84";
    contactForm.reset();
  });
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}


// Accordion toggles for ALII, Kingston Hive, Green Skills
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    // Close all other accordions
    document.querySelectorAll(".accordion-content").forEach(section => {
      if (section !== content) {
        section.style.maxHeight = null;
      }
    });

    // Toggle current accordion
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});



// Expandable Team Bio
document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.team-card');
    const fullBio = card.querySelector('.bio-full');

    if (fullBio.style.display === "none" || fullBio.style.display === "") {
      fullBio.style.display = "block";
      button.textContent = "Show Less";
    } else {
      fullBio.style.display = "none";
      button.textContent = "Read More";
    }
  });
});

// Collapsible about cards for mobile
function setupAboutCardCollapsible() {
  // Only apply on mobile (max-width: 720px)
  if (window.innerWidth > 720) return;

  const aboutCards = document.querySelectorAll('.about-card:not(.team-card)');

  aboutCards.forEach(card => {
    const content = card.querySelector('p');
    if (!content) return;

    // Create a toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.textContent = '⋯ More';
    toggleBtn.className = 'about-toggle-btn mobile-toggle';
    toggleBtn.setAttribute('aria-expanded', 'false');

    // Initially hide the content
    content.style.display = 'none';

    // Insert button after h3
    const h3 = card.querySelector('h3');
    if (h3) {
      h3.insertAdjacentElement('afterend', toggleBtn);
    }

    // Add event listener
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        content.style.display = 'none';
        toggleBtn.textContent = '⋯ More';
        toggleBtn.setAttribute('aria-expanded', 'false');
      } else {
        content.style.display = 'block';
        toggleBtn.textContent = '⋯ Less';
        toggleBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', setupAboutCardCollapsible);



</script>

// Expandable ALII section inside project card
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".alii-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".project-card");
      const expanded = card.querySelector(".alii-expanded");

      expanded.style.display =
        expanded.style.display === "block" ? "none" : "block";

      button.textContent =
        expanded.style.display === "block" ? "Hide" : "Learn More";
    });
  });
});

