let pendingTaskContainer = document.getElementById("pendingTaskContainer");
let completedTaskContainer = document.getElementById("completedTaskContainer")

function addTodoCard(todo){
    let htmlText = `<div class="row">
    <div class="col">
      <div class="card todo-card mt-2">
        <div class="card-body">
          <div class="d-flex">
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
            </div>
    
            <div class="flex-grow-1">
              <p class="card-text ellipsis-text">${todo.title}</p>
              <div class="text-sm-regular my-2">
                <i class="ri-time-line"></i>
                <span> Remind me on ${todo.date}</span>
              </div>
    
              <p class="text-sm-regular m-0">Category: ${todo.categories}</p>
            </div>
    
            <section class="icon">
              <i class="ri-delete-bin-6-line"></i>
              <i class="ri-edit-2-line"></i>
            </section>
          </div>
        </div>
      </div>
    </div>
    </div>
    `
    
    let divTag = document.createElement("div");
    divTag.innerHTML = htmlText;
    pendingTaskContainer.appendChild(divTag);
    return divTag;
};

function addTodoCardToCompletedTask(todo){
    let htmlText = `<div class="row">
    <div class="col">
      <div class="card todo-card mt-2">
        <div class="card-body">
          <div class="d-flex">
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
            </div>
    
            <div class="flex-grow-1">
              <p class="card-text ellipsis-text">${todo.title}</p>
              <div class="text-sm-regular my-2">
                <i class="ri-time-line"></i>
                <span> Remind me on ${todo.date}</span>
              </div>
    
              <p class="text-sm-regular m-0">Category: ${todo.categories}</p>
            </div>
    
            <section class="icon">
              <i class="ri-delete-bin-6-line"></i>
              <i class="ri-edit-2-line"></i>
            </section>
          </div>
        </div>
      </div>
    </div>
    </div>
    `
    
    let divTag = document.createElement("div");
    divTag.innerHTML = htmlText;
    completedTaskContainer.appendChild(divTag);
    return divTag;
};

  // \\[\\]
  let prev = localStorage.getItem("pendingTodo")

  if(prev === null){
     prev = JSON.stringify([])
     // prev = \\[\\]
  }

let pendingTodos = JSON.parse(prev)

let completedTodos = [
    {
        title: "Todo 1",
    date: new Date(),
    category: "Meeting",
    }
];

for (let i = 0; i < pendingTodos.length; i++){
    let todo = pendingTodos[i];
    addTodoCard(todo);
}

for (let i = 0; i < completedTodos.length; i++){
    let todo = completedTodos[i];
    addTodoCardToCompletedTask(todo);
}

