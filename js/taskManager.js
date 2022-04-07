console.log("Connected");
class  TaskManager {
    constructor(currentId) { 
        this.task = [];
        this.currentId = 0; 
    }
    
    addtask(name,description,assignedTo,dueDate,status){
   const task = {
       id: this.currentId++,
    //    name : ,
    //    description: ,
    //    assignedTo: ,
    //    dueDate: ,
    //    status: 
   }

   this.task.push(task);
   console.log(this.task);
}; 





//     this.name =name;
//     this.description = description;
//     this.assignedTo = assignedTo;
//     this.dueDate = dueDate;
//     this.status = status;
//    ) { 

}
    // // getters()
    //  get id () { return this.id }
    // get name () { return this.name }
    // get description () { return this.description }
    // get assignedTo () { return this.assignedTo }
    // get dueDate () { return this.dueDate }
    // get status () { return this.status}

