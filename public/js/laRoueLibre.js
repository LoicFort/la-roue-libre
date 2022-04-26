// on refresh / load go to the top of the page

window.onload = function () {
    
    window/scrollTo(0,0)

}

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

// bacKHome opacity 1 on scroll
const backHome = document.querySelector('.backHome');

window.addEventListener('scroll', () => {     
    // window.scrollY = 0;
    if (window.scrollY < 200) {
        
        backHome.style.display = "none";
    } else {
        
        backHome.style.display = "block";
    }
});


// title animation 
const title = document.querySelectorAll('.presentation h3');




window.addEventListener('load', () => {
    const titleAnimation = gsap.timeline({paused: true});
    titleAnimation.staggerFrom(title,2, { x:800, opacity:0, ease:"out"}, 1);
    titleAnimation.play();
    });

    

    
    
    

// window.addEventListener("load", function(event) {
    
//   });