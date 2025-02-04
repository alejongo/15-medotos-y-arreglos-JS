const todoInput = document.getElementById("newTodoInput");
const addTodoBtn = document.getElementById("addTodoButton");
const todoTableBody = document.getElementById("todoTableBody");
const actionCompleteBtn = document.getElementById("actionComplete");
const todoCompleted = document.getElementById("todoCompleted");

const todos = [];

// const newTodo = (id, description, isCompleted) => {

// };

addTodoBtn.addEventListener("click", () => {
  const todoDescription = todoInput.value;
  const todoId = Date.now();
  const todo = {
    id: todoId,
    description: todoDescription,
    isCompleted: false,
  };
  todos.push(todo);
  todoInput.value = "";

  console.log("click");

  let html = "";
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
                        ? `<div id="todoCompleted" class="hidden">
                          <i class="fa-solid fa-circle-check hover:cursor-pointer hover:text-emerald-500"></i>
                        </div>`
                        : `<div id="actionComplete">
                          <i class="fa-regular fa-circle-check text-blue-300 hover:cursor-pointer hover:text-emerald-500"></i>
                        </div>`
                    }
                    </div>
                    <div id="actionDelete">
                        <i class="fa-regular fa-trash-can text-rose-300 hover:cursor-pointer hover:text-rose-500"></i>
                    </div>
                </td>
            </tr>`;
  });

  todoTableBody.innerHTML = html;
});
