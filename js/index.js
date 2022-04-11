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

 // // Task 5: Tested Code - Step 1  Worked well😁
// let taskHtml = createTaskHTML();
// console.log(taskHtml);

// const addTaskbutton = document.getElementById('#addTask-button');
// // add an onsubmit event listener for form
// document.getElementById('addTaskForm')
addTaskForm.addEventListener('submit', event => {
    console.log('working!')
    // prevent default method
    event.preventDefault();
    newTask.render();
       newTask.addtask();
     //     Let's write that validation code!
    // validate that the name is not empty
  
    const name = document.querySelector("#addTaskName").value.trim();
    const description = document.querySelector("#addTaskDescription").value.trim(); 
    const dueDate = document.querySelector("#selectDueDate").value.trim();
    const assignedTo = document.querySelector("#addAssignedTo").value.trim();
    const status = document.querySelector("#selectStatus").value;

    const errors = [];
    if(name === ''|| description === '' ||dueDate === '' || assignedTo === ''||status === ''){
      errors.push("Please fill out all fields!");
      console.log(errors)
    // if(description === '')
    //   errors.push("Task Description can't be blank");
    // if(dueDate === '')  
    //   errors.push("Due Date can't be blank");
    // if(assignedTo === '')
    //   errors.push("Assigned To can't be blank");
    // if(status === '' )
    //   {errors.push("Status can't be blank");}
    //   
    // } else{
    //     console.log('All fields filled!')
        
      };
    if(errors.length > 0){
      for(let i= 0; i < errors.length; i++){
        Toastify({
          text: errors[i],
          duration:4000,
          gravity: "top",
          position:"center",
          style: {
            background:"#DF1C24"
          }
        }).showToast();
      }
    } else 
    {
        Toastify({
          text:"All fields filled!",
          duration:4000,
          gravity:"top",
          position:"center",
          style: {
            background:"#4bab4e"
          }
        }) .showToast();
    }   

    // clear form - reset it
    addTaskName.value = '';
    addTaskDescription.value = '';
    addAssignedTo.value = '';
    selectDueDate.value = '';
    selectStatus.value ='Select your status';

    
      // if(name.length === 0 || description.length === 0 || assignedTo.length === 0 || dueDate.length === 0 || status.length === 0){
      //   console.log('Please fill out all fields!');
      //   const alertErr = document.getElementById('alertError');  //Sending errors to id alertError
      //   alertErr.style.display = 'block';
      // } else {
      //    console.log('All fields filled!')
      //   const alertErr = document.getElementById('alertError'); 
      //   alertErr.style.display = 'none'; 
      // }
    
   
});
  
     
   



// Chris code 

    // if (name.length === "") {
    //     // alert('Task Name can not be left blank!');
    //     alertErr.InnerHTML ='Task name can not be left blank!'
    // }

    //     
    //     if (description.length === '') {
    //         // alert('Description can not be left blank!');
    //         alertErr.InnerHTML= 'Description can not be left blank!';
    //     }
    


    //    
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


