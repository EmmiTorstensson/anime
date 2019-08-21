
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
    targets: '.section-1-text-1',
    translateY: [50,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 8000,
    delay: function(el, i) {
      return 300 + 30 * i}
})

const myTextAnimation2 = anime({
    targets: '.section-1-text-2',
    translateY: [50,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 8000,
    delay: 5000,
    delay: function(el, i) {
      return 300 + 30 * i}
})
