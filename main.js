
let s4 = anime.timeline({
  easing: "linear",
  duration: 500
});
s4.add(
  {
    targets: ".section-4 .text-wrapper",
    opacity: [0, 1]
  },
  5000
);
s4.add(
  {
    targets: ".image-wrapper-one",
    opacity: [0, 1]
  },
  10000
);
s4.pause();

let s5 = anime.timeline({
  easing: "linear",
  duration: 750
});
s5.add(
  {
    targets: ".s5",
    opacity: [0, 1]
  },
  2000
);
s5.add(
  {
    targets: ".image-two",
    opacity: [0, 1]
  },
  2000
);
s5.pause();

function checkForVisibility() {
  var sectionFour = document.querySelector(".section-4");
  var sectionFive = document.querySelector(".section-5");

  if (isElementInViewport(sectionFour)) {
    s4.play();
  }
  if (isElementInViewport(sectionFive)) {
    s5.play();
  }
  
 
  var sectionText = document.querySelectorAll(".section-6-text");
  var sectionImg = document.querySelectorAll(".imgAni");

  sectionText.forEach(function(section) {
    if (isElementInViewport(section)) {
      section.classList.add("sectionVisible");
    }
  });

  sectionImg.forEach(function(img) {
    if (isElementInViewport(img)) {
      img.classList.add("imgVisible");
    }
  });
  
  
  
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  let middle = rect.top + (rect.bottom - rect.top) / 2;

  return (
    rect.top >= 0 &&
    middle <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", checkForVisibility, false);
  addEventListener("load", checkForVisibility, false);
  addEventListener("scroll", checkForVisibility, false);
}

//Slider carousel

var mySwiper = new Swiper(".swiper-container", {
  //   speed: 400,
  //   spaceBetween: 100,
  initialSlide: 0,
  //truewrapper adoptsheight of active slide
  autoHeight: false,
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // delay between transitions in ms
  autoplay: false,
  //   autoplayStopOnLast: false, // loop false also
  // If we need pagination
  pagination: ".swiper-pagination",
  //   paginationType: "bullets",

  //   // Navigation arrows
  //   nextButton: ".swiper-button-next",
  //   prevButton: ".swiper-button-prev",

  // And if we need scrollbar
  //scrollbar: '.swiper-scrollbar',
  // "slide", "fade", "cube", "coverflow" or "flip"
  effect: "slide",
  // Distance between slides in px.
  spaceBetween: 70,
  //
  slidesPerView: 3,
  //
  centeredSlides: false,
  //
  slidesOffsetBefore: 0,
  //
  grabCursor: true
});



/* Emmi JS*/ 

const myAnimation = anime({
    targets: '.section-1-img',
    scale: 1.2,
    duration: 16000,
    direction: 'alternate',
    easing: 'linear',
    loop: true,
})

const myTextAnimation = anime({
    targets: '.section-1-text .section-1-word',
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 8000,
    delay: function(el, i) {
        return 700*i;}
})  


/*
const myLineAnimation = anime ({
    targets: '.section-1-line-top',
    translateY: [0, 100],
    easing: "linear",
    duration: 6000, 
    delay: function(el, i) {
        return 800*i;}
})

*/