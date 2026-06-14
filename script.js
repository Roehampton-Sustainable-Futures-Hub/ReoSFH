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
//   SITE SEARCH
// =====================
const searchIndex = [
  { title: 'Home', url: 'index.html', content: 'roehampton sustainable futures hub university partnership driven sustainability academics students community groups smes ngos local authorities evidence led environmental solutions london award recognised empowering communities sustainable merton pilot uk parliament community capacity green skills applied research climate action air quality green living infrastructure circular economy innovation ayse demir ukspf big growth mayor london kingston hive a greener london community brain wandsworth council putney action group people planet partnership' },
  { title: 'About', url: 'about.html', content: 'about hub climate action people university roehampton platform community centred sustainability researchers students residents councils businesses grassroots organisations greener fairer london partnership collaboration academic expertise lived experience local knowledge evidence led research london borough kingston wandsworth hammersmith fulham a greener london community brain kingston hive sustainable merton putney action group london smes co design workshops listening sessions place neighbourhoods high streets green spaces air quality green infrastructure circular economy retrofit merton early day motion 1753 vision ayse demir atiqur khan burcak erdogan onur eva idugboe abena abboah offei landscape architect environmental psychologist permaculture designer communications marketing web design' },
  { title: 'Projects', url: 'projects.html', content: 'projects empowering change understanding optimising volunteer engagement sustainable impact merton 2024 2025 urban gardening zero waste food distribution community outreach intergenerational collaboration jesutowo fola alao uforo sundasen aderonke salau eva idugboe parliament early day motion 1753 paul kohler mp big south london ukspf alii air living infrastructure initiative air pollution urban air quality traffic emissions green walls street trees living roofs nature based solutions a greener london big growth kofi adele gabriela archana olu burcak kingston hive impact learning capacity building repair cafes sustainability education workshops volunteer led organisations evaluation framework aminat abena gabriela burcak green skills south london knowledge exchange community business development train trainer smes university students hands on training hackathon community brain mayor london op11 oc10 oc12 oc13 jennifer joseph uforo daniel ruth' },
  { title: 'Events', url: 'events.html', content: 'events wandsworth net zero partnership roundtable 4 march 2026 sector leaders innovators students public private sectors greener resilient city wandsworth council a greener london south thames college eva idugboe gabriela molina murillas patrick orji abena abboah offei mohammed data accessible transformative skills development collaboration sustainability lived planned setec aubyn square passivhaus chessington industrial estate community forum 6 may 2026 local businesses workers community organisations sustainability green skills collaboration king george field indoor bowling club community brain roehampton sustainable futures hub national rescue protective textile company mollart engineering netherlands roehampton research innovation showcase 2026 12 may 2026 academics industry partners gut microbiome nutrition adele costabile heat regulation chris tyler ai chatbots psychology laura vowels community partnerships ayse demir dementia puzzle kaz brandt homelessness melissa jogie neurodiversity gambling luisa perrino backtobalance penumbra age uk chessington industrial estate business community forum 18 june 2026 sir ed davey mp king georges hall indoor bowls club jubilee way chessington kt6 7na' },
  { title: 'Publications', url: 'publications.html', content: 'publications research reports papers sustainability green skills air quality community environmental urban london evidence policy academic' },
  { title: 'Contact', url: 'contact.html', content: 'contact get in touch partner collaborate email message sustainability community project gmail name role interest organisation researcher business local authority' },
];

// Store index in sessionStorage so search.html can read it
sessionStorage.setItem('searchIndex', JSON.stringify(searchIndex));

const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');

if (searchToggle && searchBar && searchInput) {
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

  // On Enter key — go to search results page
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && searchInput.value.trim().length > 1) {
      window.location.href = 'search.html?q=' + encodeURIComponent(searchInput.value.trim());
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

// ============================================================ 
// Event card swipe carousel ──
// Adapted from https://codepen.io/aaroniker/pen/KKVZyQK with touch and mouse drag support added
// ============================================================ 
// document.querySelectorAll('.event-carousel').forEach(function(carousel) {
//   var track = carousel.querySelector('.event-carousel-track');
//   var total = track.children.length;
//   var current = 0;
//   var startX = 0;
//   var isDragging = false;

//   function goTo(index) {
//     current = (index + total) % total;
//     track.style.transform = 'translateX(-' + (current * 100) + '%)';
//   }

  // Touch
//   carousel.addEventListener('touchstart', function(e) {
//     startX = e.touches[0].clientX;
//   }, { passive: true });

//   carousel.addEventListener('touchend', function(e) {
//     var diff = startX - e.changedTouches[0].clientX;
//     if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
//   }, { passive: true });

//   // Mouse click
// carousel.addEventListener('click', function() {
//   goTo(current + 1);
// });
// });




// ============================================================
// Event card swipe carousel with dots indicator
// ============================================================
document.querySelectorAll('.event-carousel').forEach(function(carousel) {
  var track = carousel.querySelector('.event-carousel-track');
  var total = track.children.length;
  var current = 0;
  var startX = 0;

  // Build dots
  var dotsContainer = carousel.nextElementSibling;
  if (dotsContainer && dotsContainer.classList.contains('carousel-dots')) {
    for (var i = 0; i < total; i++) {
      var dot = document.createElement('span');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    if (!dotsContainer || !dotsContainer.classList.contains('carousel-dots')) return;
    var dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach(function(dot, i) {
      dot.classList.toggle('active', i === current);
    });
  }

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    updateDots();
  }

  // Touch
  carousel.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
  }, { passive: true });

  carousel.addEventListener('touchend', function(e) {
    var diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
  }, { passive: true });

  // Mouse click
  carousel.addEventListener('click', function() {
    goTo(current + 1);
  });
});



// ============================================================
// SITE SEARCH — Go to search results page on button click
// ============================================================
const searchSubmit = document.getElementById('searchSubmit');
if (searchSubmit) {
  searchSubmit.addEventListener('click', function() {
    if (searchInput && searchInput.value.trim().length > 1) {
      window.location.href = 'search.html?q=' + encodeURIComponent(searchInput.value.trim());
    }
  });
}