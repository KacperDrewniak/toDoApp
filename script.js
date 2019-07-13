const addTask = document.getElementById('add');
const research = document.getElementById('research');
const taskList = document.getElementById('taskList');

let tasks = []

const creationTask = () => {
    
    const taskContent = document.getElementById('taskContent');
    const li = document.createElement('li');
    valueTaskContent = taskContent.value;

    if(valueTaskContent==="")return alert("void zadanie wariacie ?")

    taskList.appendChild(li);
    li.innerHTML = `${valueTaskContent}`
    tasks = taskList.getElementsByTagName('li');
}

const lookingFor = () => {

    const phrase = document.getElementById('phrase');
    for (i = 0; i < tasks.length; i++) {
        if (tasks[i].textContent.toLowerCase().includes(phrase.textContent.toLowerCase())) {
            console.log(tasks[i])
        }
    }
    
}



addTask.addEventListener('click', creationTask);
research.addEventListener('click', lookingFor);