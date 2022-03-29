let todoArr = [];

let runFlag = true;

while(runFlag){
    let userInput = prompt("Please Enter a command:");
    switch(userInput){
        case "new": 
            let newTodo = prompt("Please enter a todo");
            todoArr.push(newTodo);
            break;
        case "list":
            for (todo of todoArr){
                console.log(todo);
            }
            break;
        case "delete": 
            console.log("Deleting latest entry");
            todoArr.pop();
            break;
        case "quit":
            runFlag = false;
            break;
        default         : 
            console.log("Please enter a valid command");
            break;
    }
}