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

const wrapper = document.querySelector('.wrapper');


// bacKHome opacity 1 on scroll --------------------------------------------------------------------
const backHome = document.querySelector('#backHome');

wrapper.addEventListener('scroll', () => {
  const { clientHeight } = document.documentElement;
  console.log(wrapper.scrollTop, clientHeight * 0.96);

  const resize = (className) => {
    document.querySelectorAll('#backHome li').forEach((link) => {
      link.style.fontSize = "1rem";
      link.style.fontWeight = "";
      link.style.textDecoration = "none";
      console.log('resize')
    })
    const navlink = document.querySelector(`.${className}`);  
    navlink.style.fontSize = "1.5rem";
    navlink.style.fontweight = "bold";    
  }


  switch (true) {
    case wrapper.scrollTop > clientHeight * 0.96 && wrapper.scrollTop < clientHeight * 1.93:
      backHome.style.opacity = 1;
      const atelier = document.querySelector('.atelier').className;
      resize(atelier);
      const liAtelier = document.querySelector('.atelier');      
      liAtelier.style.textDecoration = "underline";   
      break;
    case wrapper.scrollTop > clientHeight * 1.93 && wrapper.scrollTop < clientHeight * 2.93:
      const magasin = document.querySelector('.magasin').className;      
      resize(magasin);  
      const liMagasin = document.querySelector('.magasin');      
      liMagasin.style.textDecoration = "underline";  
      break;
    case wrapper.scrollTop > clientHeight * 2.93 && wrapper.scrollTop < clientHeight * 3.93:
      const café = document.querySelector('.café').className;          
      resize(café);
      const liCafé = document.querySelector('.café');      
      liCafé.style.textDecoration = "underline";  
      break;
    case wrapper.scrollTop > clientHeight * 3.93:
      const événements = document.querySelector('.événements').className;      
      resize(événements);
      const liEvénenements = document.querySelector('.événements');      
      liEvénenements.style.textDecoration = "underline";
      break;
    default:
      backHome.style.opacity = 0;
      console.log('----------------------defaut')


  }



  // if (wrapper.scrollTop > clientHeight * 0.96) {
  //   backHome.style.opacity = 1;
  //   const li = document.querySelector('.nav-link:first-of-type');
  //   console.log(li.textContent)    
  //   li.style.fontSize = "6rem";
  // } else {
  //   backHome.style.opacity = 0;
  // }

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
