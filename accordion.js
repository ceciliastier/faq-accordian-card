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
