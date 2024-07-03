gsap.registerPlugin(ScrollTrigger);
//Horizontal scrolling
const slider = document.querySelector('#slider');
let tl = gsap.timeline({
    defaults: {
        ease: "none"
    },
    scrollTrigger: {
        trigger: slider,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: true,
        end: () => "+=" + slider.offsetWidth,
    }
})
tl.to(slider, {
    xPercent: -50,
})
ScrollTrigger.create({
    trigger: ".Projects",
    start: "top top",
    pin: false, // Do not pin vertical sections
});

// GSAP and Shery js for Animation
gsap.from(".nav-link", {
    stagger: 0.1,
    y: 20,
    duration: 1,
    opacity: 0,
    // ease: Power2
})

gsap.from(".Imgcircle", {
    x: '-600%',
    rotation: -360,
    duration: 2,
    ease: 'power3.out'
});

Shery.textAnimate(".headings h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    stagger: 0.1,
    delay: 0.3,
    duration: 1,
    ease: Power3,
    // multiplier: 0.1,
});