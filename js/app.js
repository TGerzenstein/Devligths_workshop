
//Datetime
const dateTime = document.getElementById('date');
const date = new Date();
dateTime.innerHTML = date.toLocaleTimeString('es-AR', {weekday:'long', month:'short', day:'numeric'});

//Tasks
const input = document.querySelector('.input-btn input');
const listTasks = document.querySelector('.list-group ul');
const message = document.querySelector('.list-group');


let tasks = [];



function addTasks(){
    const task = input.value;
    if (task === '') {
        showError('Please, complete this field.')
    };
}


function showError(error){
    const messageError = document.createElement('p');
    messageError.textContent = error;
    messageError.classList.add('error-message');

    message.appendChild(messageError);
    console.log(error);

    setTimeout(
        ()=> {
            messageError.remove();
        },1800);
}