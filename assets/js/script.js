const todoInput = document.getElementById("newTodoInput");
const addTodoBtn = document.getElementById("addTodoButton");
const todoTableBody = document.getElementById("todoTableBody");
const todoTableHead = document.getElementById("tableTodoHead");
const actionCompleteBtn = document.getElementById("actionComplete");
const todoCompleted = document.getElementById("todoCompleted");
const totalTodoCounter = document.getElementById("totalTodoCounter");
const completedTodoCounter = document.getElementById("completedTodoCounter");

const todos = [];

// Render Todos
const renderTodos = () => {
  let html = "";
  let tableHeadhtml = "";

  if (todos.length >= 1) {
    tableHeadhtml += ` <tr class="flex gap-1 text-gray-600">
        <th class="w-1/6 text-left">ID</th>
        <th class="w-5/6 text-left">Todo</th>
        </tr>`;
    todoTableHead.innerHTML = tableHeadhtml;

    todos.map((todo) => {
      html += `<tr class="flex gap-2 text-gray-400 justify-between border-b border-b-gray-300 pt-2 pb-2">
                  <td class="w-1/6 text-base overflow-hidden text-ellipsis">${
                    todo.id
                  }</td>
                  <td class="w-4/6 text-base">${todo.description}</td>
                  <td class="w-1/6 flex justify-end gap-3">
                      <div>
                      ${
                        todo.isCompleted
                          ? `<button id="todoCompleted" onclick='completeTodo(${todo.id})'>
                            <i class="fa-solid fa-circle-check hover:cursor-pointer text-emerald-500"></i>
                          </button>`
                          : `<button id="actionComplete" onclick='completeTodo(${todo.id})'>
                            <i class="fa-regular fa-circle-check text-blue-300 hover:cursor-pointer hover:text-emerald-500"></i>
                          </button>`
                      }
                      </div>
                      <button id="actionDelete" onclick="deleteTodo(${
                        todo.id
                      })">
                          <i class="fa-regular fa-trash-can text-rose-300 hover:cursor-pointer hover:text-rose-500"></i>
                      </button>
                  </td>
              </tr>`;
      todoTableBody.innerHTML = html;
    });
  } else {
    todoTableBody.innerHTML = html;
  }
};

// Empty input validation
todoInput.addEventListener("input", () => {
  if (todoInput.value.length >= 3) {
    addTodoBtn.removeAttribute("disabled");
    addTodoBtn.classList.remove("opacity-50");
  } else {
    addTodoBtn.setAttribute("disabled", true);
    addTodoBtn.classList.add("opacity-50");
  }
});

// Add Todo
addTodoBtn.addEventListener("click", () => {
  const todoDescription = todoInput.value;
  const todoId = todos.length + 1;
  const todo = {
    id: todoId,
    description: todoDescription,
    isCompleted: false,
  };
  todos.push(todo);
  todoInput.value = "";
  addTodoBtn.setAttribute("disabled", true);
  addTodoBtn.classList.add("opacity-50");

  renderTodos();
  countTodos();
  countCompletedTodo();
  console.log(todos);
});

// Complete Todo
const completeTodo = (id) => {
  const foundTodo = todos.find((todo) => todo.id === id);
  const isCompleted = foundTodo.isCompleted;
  foundTodo.isCompleted = !isCompleted;
  renderTodos();
  console.log(foundTodo);
  countCompletedTodo();
};

// Delete Todo
const deleteTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id == id);
  todos.splice(todoIndex, 1);
  countTodos();
  renderTodos();
};

//TODO: Count Todos
const countTodos = () => {
  let html = "";
  const totalTodos = todos.length;
  html = `Total: ${totalTodos}`;
  totalTodoCounter.innerHTML = html;
  console.log(totalTodos);
};

// Count completed Todos
const countCompletedTodo = () => {
  let html = "";

  const filterCompletedTodos = todos.filter(
    (todo) => todo.isCompleted === true
  );
  html = `Completados: ${filterCompletedTodos.length}`;
  completedTodoCounter.innerHTML = html;
};
