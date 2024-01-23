const taskTitle = document.getElementById('title');
const category = document.getElementById('category');
const description = document.getElementById('text-area');
const dateTime = document.getElementById('date-time');


let savebutton = document.getElementById("save-button");

function addTodo(){

    const todo = {
        title: taskTitle.value,
        category: category.value,
        description:description.value,
        date:dateTime.value
    }

    // \\[\\]
    let prev = localStorage.getItem("pendingTodo")

    if(prev === null){
       prev = JSON.stringify([])
       // prev = \\[\\]
    }

    // []
    prevTodoObject = JSON.parse(prev)

    // [todo]
    prevTodoObject.push(todo)

    // \\[  \\todo \\]
    const todoJson = JSON.stringify(prevTodoObject)

    localStorage.setItem("pendingTodo", todoJson)
}

savebutton.addEventListener('click', addTodo);

