
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