'use strict'
//get elements
const card1El=document.getElementById('card1');
const card2El=document.getElementById('card2');
const ratingLine=document.querySelector('.ratings')
const rate=document.querySelectorAll('.btn');
const sbtEl=document.getElementById('btnSubmit');
const rateAgainEl=document.getElementById('rate-btn')
//function
function init(){
    ratingLine.innerText=0;
}
init();
//add event listener
sbtEl.addEventListener('click',function(){
    card2El.classList.remove('hidden');
    card1El.style.display='none';
})

rate.forEach(function(buttons){
    buttons.addEventListener('click' , function(){
      ratingLine.innerHTML=buttons.innerHTML;
      console.log(ratingLine.innerHTML)
    
    })
})

rateAgainEl.addEventListener('click',function(){
    card2El.classList.add('hidden');
    card1El.style.display='block';
})
  
























































































































































































// const inputEl=document.getElementById('input-rating');
// const submitBtn=document.getElementById('submit');
// const sectionEl=document.getElementById('open');
// const section1El=document.getElementById('hidden');
// const outputEl=document.getElementById('output');
// const btnOk=document.getElementById('btnOk');


// //global variables
// let rating;

// //function init()

// function init(){
//     rating=0;
//     outputEl.innerText=0;
// }

// const display=function(index){
//     for(i=0;i<inputEl.length;i++)
//     {
//         if(i===index){
//             inputEl[i].classList.add("selected")
//         }
//         else{
//             inputEl[i].classList.remove("selected")
//         }
//     }
// };


// //event listners

// for (let i = 0; i < inputEl.length; i++) {
//     inputEl[i].addEventListener("click", function () {
//       rating = Number(this.value);
//       display(rating - 1);
//     });
//   }
  
//   //when we click submit hidden card will open
  
//   submitBtn.addEventListener("click", function () {
//     if (rating === 0) {
//       alert("Select a valid rating");
//     } else {
//       section1El.classList.remove("hidden");
//       sectionEl.classList.add("hidden");
  
//       outputEl.innerText = `You Selected ${rating} out of 5`;
//     }
//   });
  
//   //when we click ok rating card will open
  
//   btnOk.addEventListener("click", function () {
//     hiddenEl.classList.add("hidden");
//     cardEl.classList.remove("hidden");
//     init();
//     // inputBtnEl.value = null;
//     for (let i = 0; i < inputBtnEl.length; i++) {
//       inputBtnEl[i].classList.remove("selected");
//     }
//   });
  