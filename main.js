
/* Emmi JS*/ 

const myAnimation = anime({
    targets: '.section-1-img',
    scale: 1.2,
    duration: 16000,
   /* delay: function(el, i) { return i * 250 },    */
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