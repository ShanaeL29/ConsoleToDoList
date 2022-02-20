let userInput = prompt("What would you like to do?").toLowerCase();
const toDoList = [];

while (userInput) {
  if (userInput === "new") {
    userInput = prompt("Okay, please enter new toDo");
    toDoList.push(userInput);
    console.log(`${userInput} added to list`);
  }

  if (userInput === "list") {
    console.log("**********");
    for (let i = 0; i < toDoList.length; i++) {
      console.log(`${i}: ${toDoList[i]}`);
    }
    console.log("**********");
  }

  if (userInput === "delete") {
    input = prompt("Enter the index of the toDo you want deleted");
    // toDoList.splice([input], 1);
    const deleted = toDoList.splice([input], 1);
    console.log(`Task: '${deleted}' removed from list`);
  }

  if (userInput === "quit") {
    console.log("OK, EXITING THE APP NOW");
    break; // ***prevents infinite loop***
  }

  userInput = prompt("What would you like to do?");

  if (
    userInput !== "new" &&
    userInput !== "list" &&
    userInput !== "delete" &&
    userInput !== "quit"
  ) {
    alert("Sorry, I don't recognize that entry, please try again!");
  }
}
