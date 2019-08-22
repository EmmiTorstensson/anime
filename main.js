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

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", checkForVisibility, false);
  addEventListener("load", checkForVisibility, false);
  addEventListener("scroll", checkForVisibility, false);
}
