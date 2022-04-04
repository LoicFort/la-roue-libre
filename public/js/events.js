// const addButton = document.querySelector('.button');

// addButton.addEventListener('click', (e) => {
//     const event = document.querySelector('.event-card');
//     const events = document.querySelector('.events');   
//     const newEvent = event.cloneNode(true);
//     events.appendChild(newEvent);
// })

// document.querySelector('.publish').addEventListener('click', (e) => {

//     let values = [];
//     document.querySelectorAll('.event-card').forEach(div => {
//       let obj = {
//         year: div.querySelector('[name=year]').value,
//         day: div.querySelector('[name=day]').value,
//         title: div.querySelector('[name=title]').value,
//         description: div.querySelector('[name=description]').value,
//       }
//       values.push(obj);
//       console.log(obj);
      
//     })
  
//   })


const deleteBtn = document.getElementsByClassName('.deleteButton');

deleteBtn.addEventListener('click', (e) => {
    console.log('click')
    
})
