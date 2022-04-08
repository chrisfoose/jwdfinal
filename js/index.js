console.log("Connected!");
// testing code: new instance of taskManager
// use addtask method to add a new task to the manager
// must return an empty arry in the brower


// testing - Worked Well :)
// let taskHtml = createTaskHTML("mike", "go outside","Self", "01/22/2020", "Upcoming" );
// console.log(taskHtml);

// Task 4:Step 4 - Adding Tasks with the form
const addTaskForm = document.getElementById('addTaskForm');

// - Display the form html
// console.log(addTaskForm); 

const addTaskbutton = document.getElementById('#addTask-button');
// // add an onsubmit event listener for form
// document.getElementById('addTaskForm')
addTaskForm.addEventListener('submit',  function() {
    console.log('working!')
    // prevent default method
    event.preventDefault();
    newTask.addtask();
    newTask.render();
   
    // clear form 
    addTaskName.value = '';
    addTaskDescription.value = '';
    addAssignedTo.value = '';
    selectDueDate.value = '';
    selectStatus.value ='Select your status';
    // addTaskForm.reset();
});