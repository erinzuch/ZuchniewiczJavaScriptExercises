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

var question = prompt ("Do you want to play?"); 
if (question === "yes") {
    var result = ""
}
do {
 var word = prompt("Do you want to play?");
 result += "" + word;
 question = prompt ("Do you want to play?");
} while(question === "yes")

console.log(result); 