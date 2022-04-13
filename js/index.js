console.log("Connected!");

// load the tasks from localStorage
newTask.load();

// render the tasks to the page
newTask.render();

// Task 4:Step 4 - Adding Tasks with the form
const addTaskForm = document.getElementById('addTaskForm');

// const addTaskbutton = document.getElementById('#addTask-button');
// // add an onsubmit event listener for form
// document.getElementById('addTaskForm')
addTaskForm.addEventListener('submit', event => {
    console.log('working!')
    // prevent default method
    event.preventDefault();
    // newTask.addtask();
     //    Task 6: Let's write that validation code!
    //  Replaced the toastify w. standard validation block
    const name = document.querySelector("#addTaskName").value.trim();
    const description = document.querySelector("#addTaskDescription").value.trim(); 
    const dueDate = document.querySelector("#selectDueDate").value.trim();
    const assignedTo = document.querySelector("#addAssignedTo").value.trim();
    const status = document.querySelector("#selectStatus").value;
    
    if(name.length === 0 || description.length === 0 || dueDate.length === 0 || assignedTo.length === 0 || status.length === 0){
      console.log("Please fill out all fields!");
      const myAlert = document.getElementById("alertError");
      myAlert.style.display ='block';
    } else {
      console.log("All fields filled!");
      const myAlert = document.getElementById("alertError");
      myAlert.style.display = 'none';
      newTask.addtask();
      newTask.render();
      newTask.save();
    }
    // const errors = [];
    // if(name === ''|| description === '' ||dueDate === '' || assignedTo === ''||status === ''){
    //   errors.push("Please fill out all fields!");
    //   console.log(errors)
      
    // // if(description === '')
    // //   errors.push("Task Description can't be blank");
    // // if(dueDate === '')  
    // //   errors.push("Due Date can't be blank");
    // // if(assignedTo === '')
    // //   errors.push("Assigned To can't be blank");
    // // if(status === '' )
    // //   {errors.push("Status can't be blank");}
    // //   
    // } else{
    //     console.log('All fields filled!')
       
    //   };
    // if(errors.length > 0){
    //   for(let i= 0; i < errors.length; i++){
    //     Toastify({
    //       text: errors[i],
    //       duration:4000,
    //       gravity: "top",
    //       position:"center",
    //       style: {
    //         background:"#DF1C24"
    //       }
    //     }).showToast();
    //   }
    // } else 
    // {
    //     Toastify({
    //       text:"All fields filled!",
    //       duration:4000,
    //       gravity:"top",
    //       position:"center",
    //       style: {
    //         background:"#4bab4e"
    //       }
    //     }) .showToast();
    // }   
    // clear form - reset it
    addTaskName.value = '';
    addTaskDescription.value = '';
    addAssignedTo.value = '';
    selectDueDate.value = '';
    selectStatus.value ='Select your status';
});

// Chris code 

    // if (name.length === "") {
    //     // alert('Task Name can not be left blank!');
    //     alertErr.InnerHTML ='Task name can not be left blank!'
    // }
    //     if (description.length === '') {
    //         // alert('Description can not be left blank!');
    //         alertErr.InnerHTML= 'Description can not be left blank!';
    //     }
    //     if (assignedTo === '') {
    //         // alert('Assigned to can not be left blank!');
    //         alertErr.InnerHTML ='Assigned to can not be left blank!';
    //     } 
    //   // Checks if new task date is less than date for now
    //     let date = document.getElementById('selectDueDate');
    //     if (date < Date.now()) {
    //         alert('Invalid date entered.');
    //         alertErr.InnerHTML = 'Assigned date is in the past';
    //         return false;
    //     }
      
//code validation end      
// Task 7: Update A Task
// Mark Done Button : Print twice when click mark done button
const tasksList = document.querySelector('#taskList');
tasksList.addEventListener('click', (event) => {
  if (event.target.classList.contains('done-button')){
    // Get the parent Task
    const parentTask = event.target.parentElement;
    console.log(parentTask);
    const taskId = Number(parentTask.dataset.taskId);
    console.log(taskId);
    const task = newTask.getTaskById(taskId);
    // change status 
    task.status = 'Completed';

    newTask.render();
    newTask.save();
  }
  // console.log(tasksList);


// Delete Task Button 

if(event.target.classList.contains('delete-button')){

  const parentTask = event.target.parentElement;
  console.log(parentTask);

  const taskId = Number(parentTask.dataset.taskId);
  // console.log(taskId);

  // Delete tasks
  newTask.deleteTask(taskId);
  // Save tasks
  newTask.save();
  // render tasks
  newTask.render();

}
});




