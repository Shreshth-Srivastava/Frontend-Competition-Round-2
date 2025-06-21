gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

var vw = window.innerWidth;
var vh = window.innerHeight;

window.addEventListener('load',()=>{
    const loader = document.querySelector('#loader');
    const main = document.querySelector('#main');
    main.style.maxHeight = "400vh";
    loader.style.display = "none";
    if(vw > vh){
        gsap.from('#about-1>h1',{
            y: 100,
            duration: .5,
            // delay: .5,
            opacity: 0,
            scrollTrigger:{
                trigger: '#about-1>h1',
                scroller: '#main',
                start: "top 100%",
                // markers: true,
            }
        })
    
        gsap.from('#about-2>p',{
            y: -500,
            duration: 2.5,
            // delay: .5,
            opacity: 0,
            scrollTrigger:{
                trigger: '#about-2>p',
                scroller: '#main',
                start: "top 30%",
                // markers: true,
            }
        })
    
        gsap.from('#card-1,#card-3',{
            x: -1500,
            duration: 2,
            // opacity: 0,
            scrollTrigger:{
                trigger: "#card-1,#card-3",
                scroller: "#main",
                start: "start 60%",
                // markers: true,
            }
        })
    
        gsap.from('#card-2,#card-4',{
            x: 1500,
            duration: 2,
            // opacity: 0,
            scrollTrigger:{
                trigger: "#card-1,#card-3",
                scroller: "#main",
                start: "start 60%",
                // markers: true,
            }
        })
    
        gsap.from('.page-title>h1',{
            y: 100,
            duartion: .5,
            scrollTrigger:{
                trigger: '.page-title>h1',
                scroller: '#main',
                start: "top 100%",
                // markers: true,
            }
        })
    }
    else{
        gsap.from('#about-1>h1',{
            y: 100,
            duration: 1,
            // delay: 2.5,
            opacity: 0,
            scrollTrigger:{
                trigger: '#about-1>h1',
                scroller: '#main',
                start: "top 100%",
                // markers: true,
            }
        })
    
        gsap.from('#about-2>p',{
            y: -500,
            duration: 2,
            // delay: 2.5,
            opacity: 0,
            scrollTrigger:{
                trigger: '#about-2>p',
                scroller: '#main',
                start: "top 110%",
                // markers: true,
            }
        })
    
        gsap.from('#card-1,#card-3',{
            x: -1500,
            duration: 2,
            // opacity: 0,
            scrollTrigger:{
                trigger: "#card-1,#card-3",
                scroller: "#main",
                start: "top bottom",
                // markers: true,
            }
        })
    
        gsap.from('#card-2,#card-4',{
            x: 1500,
            duration: 2,
            // opacity: 0,
            scrollTrigger:{
                trigger: "#card-1,#card-3",
                scroller: "#main",
                start: "top bottom",
                // markers: true,
            }
        })
    
        gsap.from('.page-title>h1',{
            y: 100,
            duration: 2,
            // delay: .3,
            scrollTrigger:{
                trigger: '.page-title',
                scroller: '#main',
                start: "top bottom",
                // markers: true,
            }
        })
    }
})

const navbar = document.querySelector("#navbar");
const nav = document.querySelector('nav');
var flag = 0;
function a(){
    if(!flag){
        navbar.style.height = "80%";
        nav.style.height = "50vh";
        flag = 1;
    }
    else{
        navbar.style.height = "1px";
        nav.style.height = "10vh";
        flag = 0;
    }
}

function animateCounter(elementId, targetValue, duration = 2000) {
    const element = document.getElementById(elementId);
    const startValue = 0;
    const increment = targetValue / (duration / 16); // 60fps
    let currentValue = startValue;

    const timer = setInterval(() => {
        currentValue += increment;
        
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
            element.parentElement.classList.add('pulse');
        }
        
        element.textContent = Math.floor(currentValue);
    }, 16);
}

// Observer to trigger animation when elements come into view
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Start animations with different target values and slight delays
            setTimeout(() => animateCounter('counter1', 5000, 2500), 200);
            setTimeout(() => animateCounter('counter2', 9000, 2200), 400);
            setTimeout(() => animateCounter('counter3', 93, 1800), 600);
            setTimeout(() => animateCounter('counter4', 30, 1800), 600);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe the container
observer.observe(document.querySelector('.stats-container'));

// Fallback: trigger animation after page load if not triggered by observer
window.addEventListener('load', () => {
    setTimeout(() => {
        if (document.getElementById('counter1').textContent === '0') {
            animateCounter('counter1', 1000, 2500);
            setTimeout(() => animateCounter('counter2', 750, 2200), 200);
            setTimeout(() => animateCounter('counter3', 150, 1800), 400);
        }
    }, 500);
});

function scrollToTop(){
    const Card = document.querySelector('#Card');
    // scroll.scrollTo(Card,-150);
    locoScroll.scrollTo(Card,-150);
}

document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');

    // Set up Intersection Observer options
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the element is visible
    };

    // Callback function for the Intersection Observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'is-visible' class to trigger CSS animation
                entry.target.classList.add('is-visible');
                // Stop observing once the animation is triggered
                observer.unobserve(entry.target);
            }
        });
    };

    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each feature card
    featureCards.forEach(card => {
        observer.observe(card);
    });
});