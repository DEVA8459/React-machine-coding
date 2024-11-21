const appContainer = document.getElementById("container");

const hea = document.createElement("h1");
hea.textContent = "To-Do App";
appContainer.appendChild(hea);

const AddInput = document.createElement("input");
AddInput.type = "text";
AddInput.placeholder = "Enter task here";
appContainer.appendChild(AddInput);

const AddButton = document.createElement("button");
AddButton.textContent = "Add";
AddButton.className = appContainer.appendChild(AddButton);

const todoList = document.createElement("ul");
appContainer.appendChild(todoList);

const createTask = (taskText) => {
  const todoList = document.createElement("ul");
  appContainer.appendChild(todoList);
  
  const listItems = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const DeleteButton = document.createElement("button");
  DeleteButton.textContent = "Delete";
  DeleteButton.addEventListener("click", () => {
    listItems.remove();
  });

  const CheckBox = document.createElement("input");
  CheckBox.type = "checkbox";

  CheckBox.addEventListener("click", () => {
    taskSpan.style.textDecoration =
      taskSpan.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
  });

  listItems.appendChild(CheckBox);
  listItems.appendChild(taskSpan);
  listItems.appendChild(DeleteButton);

  todoList.appendChild(listItems);
};

AddButton.addEventListener("click", () => {
  const taskText = AddInput.value.trim();

  if (taskText) {
    createTask(taskText);
    AddInput.value = "";
  }
});

AddInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const taskText = AddInput.value.trim();
    if (taskText) {
      createTask(taskText);
      AddInput.value = ""; // Clear input field
    }
  }
});
