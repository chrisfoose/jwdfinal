console.log("Connected");
// Task 5: Step 1
// create task HTML function
let createTaskHTML = (id, name,description,assignedTo,dueDate,status) => {
    // string using template literals
   const html = `<li data-task-id='${id}' class="rainbow-box list-group-item" style= 'background-color: #f5ececab;  
   border-radius: 26px;
   border: 0.6px solid black;'>
   <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
       <h5>${name}</h5>
       <span class="badge-success ${status !== 'Completed' ?'badge-success' :'badge-danger'}">${status}</span>
   </div>
   <div class="d-flex w-100 mb-3 justify-content-between">
       <p>Assigned To: ${assignedTo}</p>
       <small>${dueDate}</small>
   </div>
   <p>${description}</p>
   
   <button type="button" class="delete-button btn btn-danger">Delete this task</button>
   <button type="button" class="done-button btn btn-success ${status !== 'Completed' ?'visible':'invisible'}">Mark as done</button>
  
</li><br>`;

// Table style similar to renu
//    <tr id="taskTablData">
//    <td data-label='Task Name'>${name}</td>
//    <td data-label="Task Description"${description}</td>
//    <td data-label="Assigned To">${assignedTo}</td>
//    <td data-label="Status">${status}</td>
//    <td data-label="Due Date">${dueDate}</td>
//    </tr> 
//  style="vertical-align: top; text-align: center
    //    const html = `<div class="card col-sm border border-dark" style="width: 18rem; background-color:#f5ececab; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);transition: 0.3s; margin: 2.5rem; margin-left: auto; margin-right: auto;align-items: center; justify-content: center; padding: 10px; box-sizing: border-box; border-radius: 26px; ">
//    <div class="card-body">
//      <h3 class="card-title">${name}</h3>
//      <p class="card-text"> ${description}</p>
//      <a href="#" class="btn btn-primary">${dueDate}</a>
//  </div>`;
    // console.log(html);
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
      //   console.log(task);
   }  
   //    Task 5: Step 2
    // Display The Tasks Step 2: render method() used to display task on the page
   render()  {
    //    create an array to store the tasks
            const tasksHtmlList = []; 
            const tasksHtmlVar = tasksHtmlList;
    //    loop over our tasks and create the html
            for(let i = 0 ; i <this.tasks.length; i++){       
        //     currentTask in loop
                 const currentTask = this.tasks[i];

            const newDate = new Date(currentTask.dueDate); 
        // styling how the date will appear 
         const formattedDate = (newDate.getMonth() + 1) + "/" + newDate.getDate() + "/" + newDate.getFullYear(); 
         
         const taskHtml = createTaskHTML(currentTask.id, currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status);
       
         //  push into the array
         tasksHtmlList.push(taskHtml);
        //  console.log(taskHtml);
         // console.log(tasksHtmlList);
            }

         //  Create the tasksHtml by joining each item in the tasksHtmlList
    //     with a new line in between each item.
    //     seperate w. newline 
            const tasksHtml = tasksHtmlList.join('\n');
            const tasksList = document.querySelector('#taskList')
            // const tasksList = document.querySelector('#taskTableRow'); 
            tasksList.innerHTML = tasksHtml;      
    } 
    //  Task 7:  Get the task id to add number 
    getTaskById(taskId) {
        let foundTask;

        // For Loop
        for(let i=0; i< this.tasks.length; i++){
            const task = this.tasks[i];
            if(task.id === taskId){

                foundTask = task;
            }
        }
        return foundTask;
        
    }   
    
    // Task 8: save task to page
    save() {
       const tasksJson = JSON.stringify(this.tasks);
       localStorage.setItem('tasks', tasksJson);

       // Convert the currentId to a string;
       const currentId = String(this.currentId);

       // Store the currentId in localStorage
       localStorage.setItem('currentId', currentId);
    }
    // Task 8: load the save task 
    load(){
        if(localStorage.getItem('tasks')){

            const tasksJson = localStorage.getItem('tasks');

            this.tasks = JSON.parse(tasksJson);
        }

        if(localStorage.getItem('currentId')){

            const currentId = localStorage.getItem('currentId');

            this.currentId = Number(currentId);
        }
    }

   // delete task method 
    deleteTask(taskId) {
        const newTasks = [];

        for(let i = 0 ; i < this.tasks.length; i++){
            const task = this.tasks[i]; 
            
            if(task.id !== taskId){
             newTasks.push(task);
            }
        }
        // set this.tasks to newTasks
        this.tasks = newTasks;
        
    }


    
   
   };


   
   const newTask = new TaskManager();
  


  

 