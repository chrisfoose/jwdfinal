console.log("Connected");
// create task HTML function
let createTaskHTML = (name,description,assignedTo,dueDate,status) => {
    // string using template literals
    const html = ` <div class="card col-sm border border-dark" style="width: 18rem; background-color:#f5ececab;">
    <div class="card-body">
      <h3 class="card-title">${name}</h3>
      <p class="card-text">${description}</p>
      <a href="#" class="btn btn-primary">Due Date: ${dueDate}</a>
  </div> `;
     console.log(html);
     return html;
};


class  taskManager {
    constructor(currentId = 0) { 
        this.tasks = [];
        this.currentId = currentId; 
    }
    // create the addTask method
    addtask(name,description,assignedTo,dueDate,status){

        const task = {
             id: this.currentId++,
             name: name,
             description: description,
             assignedTo: assignedTo,
             dueDate: dueDate,
             status: status
        };


        this.tasks.push(task);
        console.log(task);
   }  
    
//    Step 2: render method() used to display task on the page
   render()  {
       const taskHtmlList = []; 
       for(let i = 0 ; i <this.tasks.length; i++){
        const newDate = new Date(currentTask.dueDate); 
        // styling how the date will appear 
         const formattedDate = (newDate.getMonth() + 1) + "/" + newDate.getDate() + "/" + newDate.getFullYear(); 
         
         const taskHtml = createTaskHTML(currentTask.name, currentTask.description,currentTask.assignedTo, formattedDate, currentTask.status);
       }

       tasksHtmlList.push(tasksHtml);

   }
//    
//        const currentTask = this.tasks[i];
//         
//         
        
        
        
//         taskHtmlList.push(taskHtml);
//         console.log(taskHtmlList);
//     }
    // seperate w. newline 
    // const tasksHtml = taskHtmlList.join('\n');
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
}


//     this.name =name;
//     this.description = description;
//     this.assignedTo = assignedTo;
//     this.dueDate = dueDate;
//     this.status = status;
//    ) { 


    // // getters()
    //  get id () { return this.id }
    // get name () { return this.name }
    // get description () { return this.description }
    // get assignedTo () { return this.assignedTo }
    // get dueDate () { return this.dueDate }
    // get status () { return this.status}

