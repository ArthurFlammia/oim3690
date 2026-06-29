// Find the input box, the Add button, and the list on the page
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// When the Add button is clicked, run the addTask function
addBtn.addEventListener("click", addTask);

function addTask() {
  // Read what the user typed and remove extra spaces from the start and end
  const text = taskInput.value.trim();

  // If the box is empty, do nothing
  if (text === "") {
    return;
  }

  // Create a new list item (<li>) to hold this task
  const li = document.createElement("li");

  // Create a span to hold the task text
  const span = document.createElement("span");
  span.textContent = text;

  // Create a Delete button for this task
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  // When the Delete button is clicked, remove this whole list item
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  // Put the text and the delete button inside the list item
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Add the finished list item to the list on the page
  taskList.appendChild(li);

  // Clear the input box so it is ready for the next task
  taskInput.value = "";
}
