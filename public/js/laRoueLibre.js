


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