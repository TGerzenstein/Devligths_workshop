
//Datetime
const dateTime = document.getElementById('date');
const date = new Date();
dateTime.innerHTML = date.toLocaleTimeString('es-AR', {weekday:'long', month:'short', day:'numeric'});

//Tasks
const input = document.querySelector('.input-btn input');
const listTasks = document.querySelector('.list-group ul');
const message = document.querySelector('.list-group');


let tasks = [];


eventListeners();
function eventListeners() {
  document.addEventListener('DOMContentLoaded', ()=> {
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    newHTML();
  });

  listTasks.addEventListener('click', removeTasks);
}


function removeTasks(e){

  if(e.target.tagName == 'SPAN') {
     const removeId = parseInt(e.target.getAttribute('task-id'));
     tasks = tasks.filter(task => task.id !== removeId);
   
     newHTML();
    };
}



function removeAll(){
  
  tasks = [];
  newHTML();
}

function addTasks(){
    const task = input.value;
    if (task === '') {
        showError('Please, complete this field.')
        return;
    };
    
    const taskObject = {
      task: task,
      id: Date.now()
    }

    tasks = [...tasks, taskObject]

    newHTML();
    input.value = '';
}


function newHTML(){
      clearHTML();

  if (tasks.length > 0){
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `${task.task}          
         <span task-id="${task.id}"> X </span>    
     `;

      listTasks.appendChild(li);
    });
  }

  saveToLocalStorage();
}


function saveToLocalStorage() {
     localStorage.setItem('tasks', JSON.stringify(tasks))
}


function clearHTML() {
    listTasks.innerHTML = '';
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