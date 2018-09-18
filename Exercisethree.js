//Exercise three: while loop // 

<!DOCTYPE html>
<html>
<body>

<p>Would you like to print your name?</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var name= "Adam";
    var continueplaying = false;
    var play = prompt ("Would you like to print your name?");
    while (play === "yes") {
        console.log(name); 
        play= prompt ("Would you like to print your name again?");
        name += "!";
        console.log(name += "!");
 
    }
    document.getElementById("demo").innerHTML = text;
}

</script>

</body>
</html>

