async function fetchToDos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todoData = await response.json();
    
    const data = todoData.slice(0,20);
    console.log(data)
    localStorage.setItem("list",JSON.stringify(data)); 
    renderTodos(); 
}

let listOfData = JSON.parse(localStorage.getItem("list"));


function renderTodos(){
    const todoList = document.getElementById('todoList');
    const empty = document.getElementById('emptyMessage');

    todoList.innerHTML = "";

    if(listOfData.length === 0){
        empty.style.display = 'block';
        return;
    }

    empty.style.display = 'none';
    listOfData.forEach((ele, index) => {
        const li = document.createElement('li');
        li.classList.add('todo-list')

        li.innerHTML = `
        <span class="listData, ${ele.completed?"Completed":""}"> ${ele.title} - ${ele.completed?'Done':'Pending'}</span>
        <div class="button-container">
            <button class="status" onclick="toggleStatus(${index})">
            ${ele.completed ? "undo":"Complete"}
            </button>
            <button class="delete" onclick="deleteTodo(${index})">
            Delete
            </button>
        </div>
        `;
        todoList.appendChild(li);
    });
}

function toggleStatus(index){
    listOfData[index].completed = ! listOfData[index].completed;

    renderTodos();
}

function deleteTodo(index){
    listOfData.splice(index,1);
    renderTodos();
}


if(!localStorage.getItem('todo')){
    fetchToDos();
}else{
    renderTodos();
}