// on refresh / load go to the top of the page
window.onload = function () {

  window / scrollTo(0, 0)

}

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
}

// bacKHome opacity 1 on scroll --------------------------------------------------------------------
const backHome = document.querySelector('.backHome');

window.addEventListener('scroll', () => { 
  
  if (window.scrollY < 200) {
    backHome.style.display = "none";
  } else {

    backHome.style.display = "block";
  }
});


// title animation ---------------------------------------------------------------------------------
const title = document.querySelectorAll('.presentation h3');

window.addEventListener('load', () => {
  const titleAnimation = gsap.timeline({ paused: true });
  titleAnimation.staggerFrom(title, 2, { x: 1000, opacity: 0, ease: "in-and-out" }, 1);
  titleAnimation.play();
});

// H5 animation -------------------------------------------------------------

const titles = document.querySelectorAll('h5')
const wrapper = document.querySelector('.wrapper');


wrapper.addEventListener('scroll', () => {
  const { scrollTop, clientHeight } = document.documentElement;
  let h5FromTop = [];

  for (let i = 0; i < titles.length; i++) {
    h5FromTop.push(titles[i].getBoundingClientRect().top)

  }

  for (let i = 0; i < titles.length; i++) {
    if (scrollTop > (scrollTop + h5FromTop[i]).toFixed() - clientHeight * 0.80) {
            titles[i].classList.add('active')
    } else {
      titles[i].classList.remove('active')

    }

  }

})

// Deploy contact container (.gafa) to show more info--------------------------------------------------------

const deployMoreInfo = document.querySelector('.socialMediaContainer', ":after");
const socialMediaContainer = document.querySelector('.socialMediaContainer');
const mainPageTitle = document.querySelector('.presentation');
const comingEventsContainer = document.querySelector('.comingEventsContainer');



deployMoreInfo.addEventListener('click', () => {
  socialMediaContainer.style.width = socialMediaContainer.style.width === '' ? '80%' : '';
  socialMediaContainer.style.transition = "0.8s ease";
  document.querySelectorAll(".socialMedia > p").forEach((p) => {
    p.classList.toggle('--hidden');    
    p.style.width = "90%";   
    p.style.textAlign = "center";
  })
  document.querySelectorAll(".socialMedia").forEach((div) => {
    div.style.display="flex";
  } )
  // const containerAnimation = gsap.timeline({ paused: true });
  // containerAnimation.staggerFrom(socialMediaContainer, 1, { width: "64px", ease: "in-and-out" });
  // containerAnimation.play();

});






// Slider events------------------------------------------------------------------------------------------

const rightButton = document.querySelector('.arrowRight');


rotate = () => {
  rightButton.style.transform = "rotate(180deg)"
}

rightButton.addEventListener('click', () => {
  document.querySelectorAll('.event__card').forEach(card => {
    card.classList.toggle('--hidden')
    if (!card.id) {
      card.id = 'skip'
    } else {
      card.id = ""
    }

  })

  document.querySelectorAll('.monthDisplayed').forEach(month => {
    month.classList.toggle('--hidden')
    if (!month.id) {
      month.id = 'skip'
    } else {
      month.id = ""
    }

  })

  if (rightButton.style.transform === "rotate(180deg)") {
    rightButton.style.transform = "rotate(0deg)"
  } else {
    rotate();
  }

})

document.querySelectorAll('.number').forEach((number) => {
  number.addEventListener('click', () => {
    let phoneNumber = number.textContent;
    // phoneNumber.setSelectionRange(0,20);
    navigator.clipboard.writeText(phoneNumber);  
  alert("cliquer sur OK pour copier le numéro " + phoneNumber);    
  })

});



