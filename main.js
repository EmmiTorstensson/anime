function checkForVisibility() {
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
