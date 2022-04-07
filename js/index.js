console.log("Connected!");
// testing code: new instance of taskManager
// use addtask method to add a new task to the manager
// must return an empty arry in the brower
// let newTask = new taskManager();
// newTask.addtask();
// console.log(newTask.addtask);


// //  declare taskManager to a variable
// // const taskCollection = new taskManager();
// // Task 4:Step 4 - Adding Tasks with the form
const addTaskForm = document.querySelector('#addTaskForm');
// - Display the form html
console.log(addTaskForm); 
const addTaskbutton = document.getElementById('#addTask-button');
// // add an onsubmit event listener for form
addTaskForm.addEventListener('submit',  (event) => {
    // prevent default method
    event.preventDefault();
    
    // Add the task to the task manager
    taskManager.addtask(name,description,assignedTo,dueDate,status);
});

//selectiing the inputs from the fields
const newTaskNameInput = document.querySelector('#newTaskNameInput');
const newTaskDescription = document.querySelector('#newTaskDescription');
const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
const newTaskDueDate = document.querySelector('#newTaskDueDate');

//Let's write that validation code!


// // Task 5: Tested Code - Step 1  Worked well😁
// let taskHtml = createTaskHTML();
// console.log(taskHtml);