(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '#navbar .nav-link', handleNavLinkClick, true);
  on('click', '#header', handleNavLinkClick);
  on('click', '#header404', handleNavLinkClick);
  on('click', '#about404', handleNavLinkClick);
  on('click', '#resume404', handleNavLinkClick);
  on('click', '#skills404', handleNavLinkClick);
  on('click', '#portafolio', handleNavLinkClick);
  on('click', '#portafolio404', handleNavLinkClick);
  on('click', '#contacto', handleNavLinkClick);
  on('click', '#contactoAbout', handleNavLinkClick);
  on('click', '#contactoResume', handleNavLinkClick);
  on('click', '#contacto404', handleNavLinkClick);

  function handleNavLinkClick(e) {
    let section = select(this.hash);
    if (section) {
      e.preventDefault();
  
      let navbar = select('#navbar');
      let header = select('#header');
      let sections = select('section', true);
      let navlinks = select('#navbar .nav-link', true);
  
      navlinks.forEach((item) => {
        item.classList.remove('active');
      });
  
      this.classList.add('active');
  
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile');
        let navbarToggle = select('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }
  
      if (this.hash === '#header') {
        header.classList.remove('header-top');
        sections.forEach((item) => {
          item.classList.remove('section-show');
        });
        return;
      }
  
      if (!header.classList.contains('header-top')) {
        header.classList.add('header-top');
        setTimeout(function() {
          sections.forEach((item) => {
            item.classList.remove('section-show');
          });
          section.classList.add('section-show');
        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show');
        });
        section.classList.add('section-show');
      }

      var miEnlace = document.getElementById("titulo");
      miEnlace.innerHTML = '<a href="index.html">Clara Sacedón Ortega</a>';
      document.title = "Clara Sacedón Ortega";

      var miEnlace2 = document.getElementById("subtitulo");
      var contenidoVariable = `
        <span class="color1" data-translate="subtitle2">Ingeniera Informática</span>
        <br><br>
        <a id="contactoError" href="#contact" class="btn btn-success">Contacto</a>
        <span style="margin: 10px;"></span>
        <a href="assets/CV.pdf" class="btn btn-success" target="_blank">Descargar currículum</a>`;
      miEnlace2.innerHTML = contenidoVariable;
      on('click', '#contactoError', handleNavLinkClick);

      var subtitulo = document.getElementById("subtitulo");

      if (subtitulo.hasAttribute("style")) {
        subtitulo.removeAttribute("style");
      }

      if (document.body.classList.contains('background-404')) {
        document.body.classList.remove("background-404");
        document.body.classList.add("background-original");
      }
  
      scrollto(this.hash);
    }
  }

  /**
   * Activate/show sections on load with hash links
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      let initial_nav = select(window.location.hash)

      if (initial_nav) {
        let header = select('#header')
        let navlinks = select('#navbar .nav-link', true)

        header.classList.add('header-top')

        navlinks.forEach((item) => {
          if (item.getAttribute('href') == window.location.hash) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })

        setTimeout(function() {
          initial_nav.classList.add('section-show')
        }, 350);

        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Phrases slider
  */
  document.addEventListener("DOMContentLoaded", function () {
    const phrasesSlider = new Swiper(".phrases-slider", {
      slidesPerView: 3,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },

        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });
  });

  /**
   * Initiate volunteering details lightbox 
   */
  const volunteeringDetailsLightbox = GLightbox({
    selector: '.volunteering-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()