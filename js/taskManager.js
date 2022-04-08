console.log("Connected");
// create task HTML function
let createTaskHTML = (name,description,assignedTo,dueDate,status) => {
    // string using template literals
    const html = ` <div class="card col-sm border border-dark" style="width: 18rem; background-color:#f5ececab; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);transition: 0.3s; margin: 2.5rem; margin-left: auto; margin-right: auto;align-items: center; justify-content: center; padding: 10px; box-sizing: border-box; border-radius: 26px; ">
    <div class="card-body">
      <h3 class="card-title">${name}</h3>
      <p class="card-text">${description}</p>
      <a href="#" class="btn btn-primary">${dueDate}</a>
  </div> `;
     console.log(html);
     return html;
};

class  TaskManager {
    constructor(currentId ) { 
        this.tasks = [];
        this.currentId = 0; 
    }

    // create the addTask method
    addtask(name,description,assignedTo,dueDate,status){

        const task = {
             id: this.currentId++,
             name: document.querySelector('#addTaskName').value,
             description: document.querySelector('#addTaskDescription').value,
             assignedTo: document.querySelector('#addAssignedTo').value,
             dueDate: document.querySelector('#selectDueDate').value,
             status: document.querySelector('#selectStatus').value
        };

        this.tasks.push(task);
        console.log(task);
   }  
    
//    Step 2: render method() used to display task on the page
   render()  {
    //    create an array to store the tasks
       const taskHtmlList = []; 
       const taskHtmlVar = taskHtmlList;
    //    loop over our tasks and create the html
       for(let i = 0 ; i <this.tasks.length; i++){       
        //     currentTask in loop
        const currentTask = this.tasks[i];

        const newDate = new Date(currentTask.dueDate); 
        // styling how the date will appear 
         const formattedDate = (newDate.getMonth() + 1) + "/" + newDate.getDate() + "/" + newDate.getFullYear(); 
         
         const taskHtml = createTaskHTML(currentTask.name, currentTask.description,currentTask.assignedTo, formattedDate, currentTask.status);
        //  push into the array
         taskHtmlList.push(taskHtml);
         console.log(taskHtmlList);
       }
    //  Create the tasksHtml by joining each item in the tasksHtmlList
    //     with a new line in between each item.
    //     seperate w. newline 
        const tasksHtml = taskHtmlList.join('\n');

        // Set the inner html of the tasksList on the page
        
        const tasksList = document.getElementById('taskbody');
        tasksList.innerHTML =taskHtmlList;
        
    }




      

   } const newTask = new TaskManager();


  

   // Christopher code ----
//     //Let's write that validation code!
// //validate that the name is not empty

//     function validateName() {
//     let name = document.getElementById.addTaskName;
//     if (name == "") {
//         alert('Task Name cannot be left blank!');
//         return false;
//     }
//     }
//         
//         
        
        
//     }
    
// Below the coding I used code to go to seperate caterogies 
    // const tasksList = document.querySelector('#inprogressTask');
    // tasksList.innerHTML = tasksHtml;
       //  display taskHTMLlist in different caterogy 
    // create if statement 
    // if( document.getElementById("inprogress").selected = "true"){ 
    //     const inprogressTask =document.getElementById('#inprogressTask');
    //     inprogress.innerHTML = tasksHtml;
    // } else if ( document.getElementById("#upcoming").selected = "true") {
    //     const upcoming = document.querySelector('#upcomingTask');
    //     upcoming.innerHTML = tasksHtml;
    
    // } else if ( document.getElementById) { 
    //     const completedTask = document.querySelector('#completedTask');
    //      completedTask.innerHTML = tasksHtml;

    // }
    
   
    // }