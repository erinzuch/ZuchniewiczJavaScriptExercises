// Exercise Two //

// function myFunction() {
//     var text;
//     var play = prompt("Do you want to play?");
//     switch(play) {
//         case "yes":
//         text = "prompt: enter a word";
//         break;
//     case "Do you want to play again?":
//         text = "yes";
//         break;
//         case "Enter a word":
//         text = "Do you want to play again?";
//         break;
//         text= "no";

do {
 var promptInput = prompt("Do you want to play?");
 var word = prompt("Enter a word");
} while(promptInput === "yes")

