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

    //Let's write that validation code!
//validate that the name is not empty

    function validateName() {
    let name = document.getElementById.addTaskName;
    if (name == "") {
        alert('Task Name can not be left blank!');
        return false;
    }

    function validateDescription() {
        let description = document.getElementById.addTaskDescription;
        if (description ="") {
            alert('Description can not be left blank!');
            return false;
        }
    }

    function validateAssignedTo() {
        let assigned = document.getElementById.addAssignedTo;
        if (assigned = '') {
            alert('Assigned to can not be left blank!');
            return false;
        }
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