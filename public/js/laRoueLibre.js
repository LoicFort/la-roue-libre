// on refresh / load go to the top of the page
window.onload = function () {
  window / scrollTo(0, 0);
}

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
};

// bacKHome opacity 1 on scroll --------------------------------------------------------------------
const backHome = document.querySelector('.backHome');
const backHomeMobile = document.querySelector('.backHomeMobile');
const wrapper = document.querySelector('.wrapper');



wrapper.addEventListener('scroll', () => {

  if (wrapper.scrollTop < 200) {
    backHome.style.display = "none";
    backHomeMobile.style.display = "none";
    ;
  } else if (wrapper.clientWidth > 850) {
    backHome.style.display = "block";
  } else {
    backHomeMobile.style.display = "block"

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

const titles = document.querySelectorAll('h5');
const cards = document.querySelectorAll('.card');
const eventsCard = document.querySelectorAll('#eventsPage .event__card');

// wrapper already declare above
wrapper.addEventListener('scroll', () => {

  const { scrollTop, clientHeight } = document.documentElement;
  let h5FromTop = [];
  let cardsFromTop = [];
  let eventsCardsFromTop = [];

  for (let i = 0; i < titles.length; i++) {
    h5FromTop.push(titles[i].getBoundingClientRect().top);
  }

  for (let i = 0; i < cards.length; i++) {
    cardsFromTop.push(cards[i].getBoundingClientRect().top);
  }

  eventsCard.forEach((card) => eventsCardsFromTop.push(card.getBoundingClientRect().top))


  for (let i = 0; i < titles.length; i++) {
    if (scrollTop > (scrollTop + h5FromTop[i]).toFixed() - clientHeight * 0.80) {
      titles[i].classList.add('active')
    } else {
      titles[i].classList.remove('active')
    }

  }
  for (let i = 0; i < cards.length; i++) {
    if (scrollTop > (scrollTop + cardsFromTop[i]).toFixed() - clientHeight * 0.80) {
      cards[i].classList.add('active')
    } else {
      cards[i].classList.remove('active')
    }

  }
  for (let i = 0; i < eventsCard.length; i++) {
    if (scrollTop > (scrollTop + eventsCardsFromTop[i]).toFixed() - clientHeight * 0.65) {
      eventsCard[i].classList.add('active')
    } else {
      eventsCard[i].classList.remove('active')
    }

  }


})



// Deploy contact container (.gafa) to show more info--------------------------------------------------------

const socialMediaContainer = document.querySelector('.socialMediaContainer');
const socialMediaAfter = document.querySelector(('.socialMediaContainer'), ':after');
const mainPageTitle = document.querySelector('.presentation');
const comingEventsContainer = document.querySelector('.comingEventsContainer');



socialMediaAfter.addEventListener('click', () => {
  socialMediaContainer.style.width = socialMediaContainer.style.width === '' ? '350px' : '';

  document.querySelectorAll(".socialMedia > p").forEach((p) => {

    p.classList.toggle('--hidden');
    p.style.width = "85%";
    p.style.textAlign = "center";
  })
  document.querySelectorAll(".socialMedia").forEach((div) => {
    div.style.display = "flex";
  })
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

// Instagram photo slider 

const handlePhotoSlider = () => {
  photoSlider.classList.toggle('--hidden');
}


const cardPhotos = document.querySelector('p.card.photos');
const photoSlider = document.querySelector('.photosSlider');
cardPhotos.addEventListener('click', handlePhotoSlider)
