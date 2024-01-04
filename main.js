let todo = [];

let request = prompt("Please enter your request");

while (true) {
  if (request === "add") {
    // add
    let task = prompt("Enter the task you want to add");
    todo.push(task);
    console.log("task added successfully");
  } else if (request === "list") {
    // list
    if (todo.length != 0) {
      console.log("-----------");
      for (task of todo) {
        console.log(task);
      }
      console.log("-----------");
    } else {
      console.log("list is empty");
    }
  } else if (request === "delete") {
    if (todo.length != 0) {
      let deleteTask = prompt("Enter the task you want to delete");
      let idx = todo.indexOf(deleteTask);
      todo.splice(idx, 1);
      console.log("task deleted successfully");
    } else {
      console.log("list is empty");
    }
  } else if (request === "quit") {
    // quit
    console.log("quitting application");
    break;
  }
  request = prompt("Please enter your request");
}
