let max = prompt("Enter the max num: ");
let guess = prompt("Eneter the gussing number:  ");
let num = Math.floor(Math.random() * max) + 1;
while(true) {
    if(guess == "quit") {
        alert("You quit.");
        break;
    }
    if(num == guess) {
        alert("You guess right!");
        break;
    } else if(guess > num) {
        guess = prompt("Wrong guess. You guess large num, please try again");
    } else {
        guess = prompt("Wrong guess. You guess small num, please try again");
    }
}