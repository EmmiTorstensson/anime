
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
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  var middle = rect.top + (rect.bottom - rect.top) / 2;
  return (
    rect.top >= 0 &&
    middle <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", checkForVisibility, false);
  addEventListener("load", checkForVisibility, false);
  /* Lyssna på scroll-eventet, och kör funktionen checkForVisibility */
  addEventListener("scroll", checkForVisibility);
}


/* Emmi JS*/ 

const myAnimation = anime({
    targets: '.section-1-img',
    scale: 1.2,
    duration: 16000,
    delay: function(el, i) { return i * 250 },    
    direction: 'alternate',
    easing: 'linear',
    loop: true,
})

const myTextAnimation = anime({
    targets: '.section-1-text-wrapper .section-1-word',
    translateY: [50,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 8000,
    delay: function(el, i) {
        return 700*i;}
})  

