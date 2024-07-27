document.addEventListener("DOMContentLoaded", () => {
  // your code here


  let form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission
  
      let inputField = document.getElementById("new-task-description");
      const task = inputField.value;
  
      const newTaskItem = document.createElement("li");
      newTaskItem.textContent = task;
      taskList.appendChild(newTaskItem);
  
      inputField.value = ""; 
    });
});
