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
    // addTaskName.value = '';
    // addTaskDescription.value = '';
    // addAssignedTo.value = '';
    // selectDueDate.value = '';
    // selectStatus.value = '';

    console.log(add)

    //Let's write that validation code!
//validate that the name is not empty
    alertErr = document.getElementById.alertError;  //Sending errors to id alertError

    function validateName() {
    let name = document.getElementById.addTaskName;
    if (name == "") {
        alert('Task Name can not be left blank!');
        alertErr.InnerHTML('Task name can not be left blank!')
        return false;
    };

    function validateDescription() {
        let description = document.getElementById.addTaskDescription;
        if (description ="") {
            alert('Description can not be left blank!');
            alertErr.InnerHTML('Description can not be left blank!');
            return false;
        }
    };

    function validateAssignedTo() {
        let assigned = document.getElementById.addAssignedTo;
        if (assigned = '') {
            alert('Assigned to can not be left blank!');
            alertErr.InnerHTML('Assigned to can not be left blank!');
            return false;
        };
    
    function validateDate() {  // Checks if new task date is less than date for now
        let date = document.getElementById.newTaskDueDate;
        if (date < date.now()) {
            alert('Invalid date entered.');
            alertErr.InnerHTML('Assigned date is in the past');
            return false;
        }
    };
    }


//code validation end
;}



//Clear the forms
newTaskNameInput.value = '';
newTaskDescription.value = '';
newTaskAssignedTo.value = '';
newTaskDueDate.value = '';
newTaskStatus.value = '';

// // Task 5: Tested Code - Step 1  Worked well😁
// let taskHtml = createTaskHTML();
// console.log(taskHtml);
    addTaskName.value = '';
    addTaskDescription.value = '';
    addAssignedTo.value = '';
    selectDueDate.value = '';
    selectStatus.value ='Select your status';
    // addTaskForm.reset();
});
