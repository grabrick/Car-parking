const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*  */
const LinkFeatured = document.querySelector('.featured__item');
const ActiveFeatured = document.querySelectorAll('.active-featured')

/*=============== SHOW MENU ===============*/

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*=============== MENU HIDDEN ===============*/

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== POPULAR SWIPER ===============*/

let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,
    
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        768: {
          slidesPerView: 4,
        },
        1024: {
          spaceBetween: 48,
        },
      },
});

/*=============== MIXITUP FILTER FEATURED ===============*/

let mixerFeatured = mixitup('.featured__content', {
  selectors: {
      target: '.featured__card'
  },
  animation: {
      duration: 300
  }
});

/* Link active featured  не работает*/ 

function activeFeatured() {
  LinkFeatured.forEach(LinkFeatured.classList.remove('.active-featured'));
  this.classList.add('active-featured')
}
LinkFeatured.addEventListener('click', () => {

})


/*=============== SHOW SCROLL UP ===============*/ 

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link');
    }
  })
}
window.addEventListener('scroll', scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
