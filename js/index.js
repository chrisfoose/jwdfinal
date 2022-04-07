console.log("Connected!");
// testing code: new instance of taskManager
// use addtask method to add a new task to the manager
// must return an empty arry in the brower
// let newTask = new taskManager();
// console.log(newTask.addtask);

// testing - Worked Well :)
// let taskHtml = createTaskHTML("mike", "go outside","Self", "01/22/2020", "Upcoming" );
// console.log(taskHtml);
// // Task 4:Step 4 - Adding Tasks with the form
const addTaskForm = document.querySelector('#addTaskForm');
// - Display the form html
console.log(addTaskForm); 
const addTaskbutton = document.getElementById('#addTask-button');
// // add an onsubmit event listener for form
addTaskForm.addEventListener('submit',  (event) => {
    // prevent default method
    event.preventDefault();
    

    //selectiing the inputs from the fields
    const addTaskName = document.querySelector('#addTaskName');
    const addTaskDescription = document.querySelector('#addTaskDescription');
    const addAssignedTo = document.querySelector('#addAssignedTo');
    const selectDueDate = document.querySelector('#selectDueDate');
    const selectStatus = document.querySelector('#selectStatus');

    //  get values of the inputs
    const name =addTaskName.value;
    const description = addTaskDescription.value;
    const assignedTo = addAssignedTo.value;
    const dueDate = selectDueDate.value;
    const status = selectStatus.value;
    

    // Add the task to the task manager
    taskManager.addtask(name,description,assignedTo,dueDate,status);

    // clear form after submit
    addTaskForm.reset();

    // clear form 
    // addTaskName.value = '';
    // addTaskDescription.value = '';
    // addAssignedTo.value = '';
    // selectDueDate.value = '';
    // selectStatus.value = '';

    console.log(add)

});

// //selectiing the inputs from the fields
// const newTaskNameInput = document.querySelector('#newTaskNameInput');
// const newTaskDescription = document.querySelector('#newTaskDescription');
// const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
// const newTaskDueDate = document.querySelector('#newTaskDueDate');

//Let's write that validation code!


// // Task 5: Tested Code - Step 1  Worked well😁
// let taskHtml = createTaskHTML();
// console.log(taskHtml);