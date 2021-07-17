const groups = document.querySelectorAll('.faq-group');
const wrapper = document.querySelector('.wrapper');
const faqs = document.querySelector('.faqs');

/*
used forEach loop to set event listeners on each "group"
used for loop to loop through each group
each iteration checks if the user clicked on a "group" or not
if the current target is not the group in quesiton, then the class .show-answer is removed
if the current target is the group in question, then the class .show-answer is toggled
*/


groups.forEach(function(group){ // initailize foreach on groups to create event listeners on each "group"
    group.addEventListener('click', function(e){ //create click event listeners for each group and initialize callback funciton, taking the event as an argument
        for(let i = 0; i < groups.length; i++){  
            if(groups[i] !== e.currentTarget){ // if group[i] is not the current target of the event, remove the class .show-answer
                groups[i].classList.remove('show-answer');
            } else{ // otherwise, give the current target the class of .show-answer
                e.currentTarget.classList.toggle('show-answer');
            }
        }
    });
});





// buttons.forEach(function(button){
//     let accordian = button.parentElement;
//     button.addEventListener('click', function(){
        
//         for(var i = 0; i < groups.length; i++){
            
//         }

//         accordian.classList.toggle('show-answer');
//     });
// });

// document.addEventListener('click', function(e){
//     for(var i = 0; i < buttons.length; i++){
//         let accordian = buttons[i].parentElement;
//         if(buttons[i] !== e.target){
//             accordian.classList.remove('show-answer');
//         }else if(buttons[i] == e.target){
//             accordian.classList.toggle('show-answer');
//         }else{
//             accordian.classList.remove('show-answer');
//         }
//     }
// });


// groups.forEach(function(group){
//     group.addEventListener('click', function(){ 
//         group.classList.toggle('show-answer');
//     });
// });

// for(let i = 0; i < groups.length; i++){
//     groups[i].addEventListener('click', function(){
//         this.classList.toggle('show-answer');
//     });
// }

// document.addEventListener('click', function(e){
//     for(let i = 0; i < groups.length; i++){
//         // let btn = groups[i].children[0];
//         console.log(e);
//         console.log(btn);
//         if(groups[i] !== e.target){
//             groups[i].classList.remove('show-answer');
//         } else if(btn == e.target){
//             groups[i].classList.toggle('show-answer');
//         }
//     }
//         // groups.forEach(function(group){
//         //     group.addEventListener('click', function(){
//         //         group.classList.toggle('show-answer');
//         //     });
//         // });
// });