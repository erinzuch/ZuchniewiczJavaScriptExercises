//Exercise three: while loop // 

<!DOCTYPE html>
<html>
<body>

<p>Would you like to print your name?</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var text = "Would you like to print your name?";
    var i = yes;
    while (i = yes) {
        text += "Hello. My name is adam" + '!';
        i++;
    }
    document.getElementById("demo").innerHTML = text;
}
</script>

</body>
</html>