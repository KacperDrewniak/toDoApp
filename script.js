const addTask = document.getElementById('add');
const phrase = document.getElementById('phrase');
const research = document.getElementById('research');
const taskList = document.getElementById('taskList');

let tasks = []

const creationTask = () => {
    const taskContent = document.getElementById('taskContent');
    const li = document.createElement('li')
    
    valueTaskContent = taskContent.value;
    taskList.appendChild(li);
    li.innerHTML = `${valueTaskContent}`
    tasks = taskList.getElementsByTagName('li');
}

addTask.addEventListener('click', creationTask);