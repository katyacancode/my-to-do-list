gsap.to('h1', {
    text: 'What are your plans for today?',
    duration: 4,
    ease: 'power1.in',
    delay: 1
})

const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoList = document.querySelector('.toDoList');

inputField.addEventListener('keypress', function(e){
    if(e.keyCode === 13) {
        makePlan();
    }
})

btn.addEventListener('click', makePlan);

function makePlan() {    
    const plan = document.createElement('li');
    plan.innerText=inputField.value;
    if (inputField.value.length === 0) {
        Swal.fire({
            icon: 'error',
            text: 'Please enter an item'
            })
            return false;
    }     
    plan.classList.add('planAdded');
    toDoList.appendChild(plan);
    inputField.value =''; 
    plan.addEventListener('click', ()=> {
        plan.classList.add('planDone');        
    })
    plan.addEventListener('dblclick', ()=> {
        toDoList.removeChild(plan);
    })  
}






