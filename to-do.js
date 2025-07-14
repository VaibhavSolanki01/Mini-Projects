let todo = [];
while(true) {
    let req = prompt("Enter your request: ");
    if(req == "quit") {
        alert("todo quited.");
        break;
    } else if(req == "list") {
        for(let i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
    } else if(req == "add") {
        let task = prompt("Enter the task that you want to add");
        todo.push(task);
        console.log("task added.");
    } else if(req == "delete") {
        let idx = prompt("Enter the task idx tha you want to delete:");
        todo.splice(idx, 1);
        console.log("task deleted.");
    } else {
        alert("invalid input");
    }
}