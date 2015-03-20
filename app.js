//Array of Roman Gods
var gods = ["Placeholder", "Janus", "Jupiter", "Saturn", "Genius", "Mercury", "Apollo", "Mars", "Vulcan", "Neptune", "Sol", "Orcus", "Liber", "Tellus", "Ceres", "Juno", "Luna", "Diana", "Minerva", "Venus", "Vesta"];



//What happens when you click the button
function myFunction() {
    //Generates a name
    var x = document.getElementById("demo");
    x.innerHTML = gods[Math.floor((Math.random() * (gods.length -1)) + 1)];
    //Generates a background color
    var red = Math.floor(Math.random() * 9);
    var green = Math.floor(Math.random() * 9);
    var blue = Math.floor(Math.random() * 9);
    document.getElementsByTagName("body")[0].style.backgroundColor = "#" + red + green + blue + red + green + blue;
}

