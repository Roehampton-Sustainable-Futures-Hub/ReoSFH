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
// const contactForm = document.querySelector(".contact-form");
// const formNote = document.getElementById("formNote");

// if (contactForm && formNote) {
//   contactForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     formNote.textContent = "Thank you for your enquiry. We’ll be in touch shortly.";
//     formNote.style.color = "#3ddc84";
//     contactForm.reset();
//   });
// }

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



// </script>

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


// ============================================================
// HOME PAGE — 4-CARD DESKTOP TAB SWITCHER
// Paste at END of script.js
// ============================================================

(function () {
  document.querySelectorAll('.home-tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Deactivate all buttons + panels
      document.querySelectorAll('.home-tab-btn').forEach(function (b) {
        b.classList.remove('active');
      });
      document.querySelectorAll('.home-tab-panel').forEach(function (p) {
        p.classList.remove('active');
      });

      // Activate clicked
      btn.classList.add('active');
      var target = btn.getAttribute('data-tab');
      var panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });
})();


// ============================================================
// EVENTS CAROUSEL — replace old carousel block in script.js
// ============================================================

// (function () {
//   const track = document.getElementById('carouselTrack');
//   if (!track) return;

//   const slides = track.querySelectorAll('.carousel-slide');
//   let current = 0;

//   function perView() {
//     return window.innerWidth >= 721 ? 3 : 1;
//   }

//   function update() {
//     const pv = perView();
//     const max = slides.length - pv;
//     if (current > max) current = max;
//     if (current < 0) current = 0;
//     track.style.transform = 'translateX(-' + (current * (100 / pv)) + '%)';
//   }

//   document.getElementById('carouselNext')?.addEventListener('click', function () {
//     const pv = perView();
//     const max = slides.length - pv;
//     current = current >= max ? 0 : current + pv;
//     update();
//   });

//   document.getElementById('carouselPrev')?.addEventListener('click', function () {
//     const pv = perView();
//     const max = slides.length - pv;
//     current = current <= 0 ? max : current - pv;
//     update();
//   });

//   window.addEventListener('resize', update);
//   update();
// })();



// ============================================================
// EVENTS CAROUSEL
// ============================================================
(function () {
  const track = document.getElementById('carouselTrack');
  if (!track) return;

  const slides = track.querySelectorAll('.carousel-slide');
  let current = 0;

  function perView() {
    return window.innerWidth >= 721 ? 3 : 1;
  }

  function update() {
    const pv = perView();
    const max = Math.max(0, slides.length - pv);
    if (current > max) current = max;
    if (current < 0) current = 0;
    const pct = (100 / pv) * current;
    track.style.transform = 'translateX(-' + pct + '%)';
  }

  document.getElementById('carouselNext')?.addEventListener('click', function () {
    const pv = perView();
    const max = Math.max(0, slides.length - pv);
    current = current >= max ? 0 : current + 1;
    update();
  });

  document.getElementById('carouselPrev')?.addEventListener('click', function () {
    const pv = perView();
    const max = Math.max(0, slides.length - pv);
    current = current <= 0 ? max : current - 1;
    update();
  });

  window.addEventListener('resize', update);
  update();
})();


// ============================================================
// EVENTS PAGE — Expandable event descriptions
// ============================================================
document.querySelectorAll('.event-read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const extra = btn.closest('.event-card').querySelector('.event-extra');
    if (extra.style.display === 'none') {
      extra.style.display = 'block';
      btn.textContent = 'Show Less';
    } else {
      extra.style.display = 'none';
      btn.textContent = 'Read More';
    }
  });
});

// ============================================================
// PUBLICATIONS PAGE — Filter buttons
// ============================================================
document.querySelectorAll('.pub-filter-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.pub-filter-btn').forEach(function(b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.pub-card').forEach(function(card) {
      if (filter === 'all') {
        card.style.display = '';
      } else {
        const tags = card.getAttribute('data-tags') || '';
        card.style.display = tags.includes(filter) ? '' : 'none';
      }
    });
  });
});

// ============================================================
// PUBLICATIONS PAGE — Cite toggle
// ============================================================
function toggleCite(btn) {
  const block = btn.closest('.pub-card').querySelector('.pub-cite-block');
  const isOpen = block.style.display === 'block';
  block.style.display = isOpen ? 'none' : 'block';
  btn.textContent = isOpen ? 'Cite this report' : 'Hide citation';
}


// ============================================================
// CONTACT PAGE — EmailJS initialisation and form handler
// ============================================================
(function () {
  if (typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: "Y8ZltrA1mcrySyiaF" });
  }
})();

function sendEmail(e) {
  e.preventDefault();

  const btn = document.getElementById("submitBtn");
  const note = document.getElementById("formNote");
  btn.textContent = "Sending...";
  btn.disabled = true;

  const params = {
    name:     document.getElementById("name").value,
    email:    document.getElementById("email").value,
    role:     document.getElementById("role").value,
    interest: document.getElementById("interest").value,
    message:  document.getElementById("message").value,
  };

  emailjs.send("service_gbyzkuc", "template_u78yj1i", params)
    .then(function () {
      note.textContent = "Thank you, your message has been sent. We will be in touch shortly.";
      note.style.color = "#00A06E";
      document.getElementById("contactForm").reset();
      btn.textContent = "Send Message";
      btn.disabled = false;
    }, function () {
      note.textContent = "Something went wrong. Please email us directly at sustainabilitycommunityproject@gmail.com";
      note.style.color = "#f97373";
      btn.textContent = "Send Message";
      btn.disabled = false;
    });
}


// ============================================================
// GALLERY PAGE — Filter buttons & Lightbox
// ============================================================
(function () {
  const filterBtns   = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (!filterBtns.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      galleryItems.forEach(function (item) {
        item.style.display =
          filter === 'all' || item.getAttribute('data-tags') === filter ? '' : 'none';
      });
    });
  });

  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = document.getElementById('lightboxImg');
  const lightboxCap   = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev  = document.getElementById('lightboxPrev');
  const lightboxNext  = document.getElementById('lightboxNext');
  if (!lightbox) return;

  let currentIndex = 0;

  function getVisibleItems() {
    return Array.from(galleryItems).filter(function (item) {
      return item.style.display !== 'none';
    });
  }

  function openLightbox(index) {
    const visible = getVisibleItems();
    if (!visible[index]) return;
    currentIndex = index;
    lightboxImg.src = visible[index].querySelector('img').src;
    lightboxImg.alt = visible[index].querySelector('img').alt;
    lightboxCap.textContent = visible[index].querySelector('.gallery-caption').textContent;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      openLightbox(getVisibleItems().indexOf(item));
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  lightboxNext.addEventListener('click', function (e) {
    e.stopPropagation();
    const visible = getVisibleItems();
    openLightbox((currentIndex + 1) % visible.length);
  });
  lightboxPrev.addEventListener('click', function (e) {
    e.stopPropagation();
    const visible = getVisibleItems();
    openLightbox((currentIndex - 1 + visible.length) % visible.length);
  });
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowRight') lightboxNext.click();
    if (e.key === 'ArrowLeft')  lightboxPrev.click();
  });
})();


// =====================
//      SEARCH BUTTON
// =====================
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
if (searchToggle && searchBar) {
  searchToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    searchBar.classList.toggle('open');
    if (searchBar.classList.contains('open')) searchInput.focus();
  });
  document.addEventListener('click', function(e) {
    if (!searchBar.contains(e.target) && e.target !== searchToggle) {
      searchBar.classList.remove('open');
    }
  });
}


// ============================================================
// PROJECTS PAGE — Read More / Show Less toggle
// ============================================================
document.querySelectorAll('.project-read-more').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var extra = btn.closest('.project-card').querySelector('.project-extra-content');
    if (extra.style.display === 'block') {
      extra.style.display = 'none';
      btn.textContent = 'Read More';
    } else {
      extra.style.display = 'block';
      btn.textContent = 'Show Less';
    }
  });
});