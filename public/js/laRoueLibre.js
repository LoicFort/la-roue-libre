const setBaseURL = "http://localhost:4001";
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
    titleAnimation.staggerFrom(title,2, { x:800, opacity:0, ease:"in-and-out"}, 1);
    titleAnimation.play();
    });

    

    // création de pdf

    function getPDF() {
        let doc = new jsPDF();
       
        // We'll make our own renderer to skip this editor
        let specialElementHandlers = {
          '#getPDF': function(element, renderer){
            return true;
          },
          '.controls': function(element, renderer){
            return true;
          }
        };
      
        // All units are in the set measurement for the document
        // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
        doc.fromHTML($('element-to-print').get(0), 15, 15, {
          'width': 170, 
          'elementHandlers': specialElementHandlers
        });
      
        doc.save('Generated.pdf');
      }


    // Deploy contact container (.gafa) to show more info

    const deployMoreInfo = document.querySelector('.socialMediaContainer', ":after");
    const closeInfo = document.querySelector('.showInfo', ":after");
    const infoContainer = document.querySelector('.showInfo');
    const mainPageTitle = document.querySelector('.presentation');

    

    deployMoreInfo.addEventListener('click', () => {
      if(window.getComputedStyle(infoContainer).display === "none") {
        infoContainer.style.display ="flex";
        infoContainer.style.transition ="0.5s ease";

        mainPageTitle.style.fontSize ="2rem"
      } else {
        infoContainer.style.display ="";
        mainPageTitle.style.fontSize ="";
      };

    const titleAnimation = gsap.timeline({paused: true});
    titleAnimation.staggerFrom(infoContainer,0.5, { opacity:0, ease:"in-and-out"}, 1);
    titleAnimation.play();

     

                   
            
    });

    // Slider events

    const rightButton = document.querySelector('.arrowRight');
    const leftButton = document.querySelector('.arrowLeft');

    rotate = () => {
      rightButton.style.transform = "rotate(180deg)"
    }
    
    
    
    
    rightButton.addEventListener('click', () => {
        document.querySelectorAll('.event__card').forEach( card => {
          card.classList.toggle('--hidden') 
      })
      
      document.querySelectorAll('.monthDisplayed').forEach(month => {
        month.classList.toggle('--hidden')

      })

    if(rightButton.style.transform === "rotate(180deg)") {
      rightButton.style.transform = "rotate(0deg)"
    } else {
      rotate();
    }

    })


    let actualMonth = new Date().toLocaleString('fr-FR', { month: 'long' });    






    // const getSideMonth = async function() {
      
    //   const response =  await fetch(`${setBaseURL}/updateData`);
    //   // const response = fetch = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    //   if(!response.ok) {
    //     throw new Error(`API respond with error code ${response.status}`)
    //   }
    //   try {
    //     const data = await response.json();

    //     const updateMonth = document.querySelector('.event__month');
    //     const eventsContent = document.querySelector('.events__content');
    //     const updateCard = document.querySelector('.event__card');
    //     const updateLogo = document.querySelector('.event__logo');
    //     const updateTitle = document.querySelector('.event__title');
    //     const updateDay = document.querySelector('.event__day');
    //     const updateDescription = document.querySelector('.event__description');
    //     updateMonth.textContent = data[0].month;

          

    //     data.forEach(element => {
    //      let card =  document.createElement("div");
    //      let logo =  document.createElement("img");
    //      let day =  document.createElement("div");
    //      let title =  document.createElement("div");
    //      let description =  document.createElement("div");

    //      card.className = `event__card ${element.month}`;
    //      logo.className = 'event__logo';
    //      day.className = `event__day`;
    //      title.className = 'event__title';
    //      description.className = 'event__description';

    //      logo.src = `/images/logo/${element.logo}.png`;
    //      console.log(element.logo)


         
    //      day.textContent = `${element.day}`;
    //      title.textContent = `${element.title}`;
    //      description.textContent = `${element.description}`;
        
        
    //      eventsContent.appendChild(card); 
    //      card.appendChild(logo);  
    //      card.appendChild(day);
    //      card.appendChild(title);
    //      card.appendChild(description);



    //     });

    //     document.querySelectorAll(`.${actualMonth}`).forEach(card => card.remove());



       

    //   } catch(error) {
    //     console.error(error)
        
    //   }

    // }
    

    // rightButton.addEventListener('click', getSideMonth);
    


























//    let downloadButton = document.querySelector('.downloadButton');

//    function generatePDF() {
//     const element = document.getElementById('element-to-print');

//     let opt = {
//         margin:       1,
//         filename:     'calendrier-LRL.pdf', 
//         html2canvas: {scale:1, logging: true, width: 1000, height: 10000}, 
//         pageBreak: {mode: 'avoid-all'},         
//         jsPDF:        { unit: 'mm', format: 'a4', orientation: 'l' }
//       };    
    
//     html2pdf().set(opt).from(element).save();
    
// };
//    downloadButton.addEventListener('click', () => {
       
//        try {
//            generatePDF();
//         } catch (error) {
//             console.error(error);
//         }       

//    })
    
    

// window.addEventListener("load", function(event) {
    
//   });