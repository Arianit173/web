// function printNames(){
//     document.write("John Doe");
//     document.write("<br>");
//    setTimeout(function(){document.write("Ana")}, 2000);
// }
// printNames();

var colors = ["red","green","blue","yellow"];
var names = ["John","Doe","Ana","Arianit"];

function changeBgColor(){
   document.querySelector('body').style.background = colors[Math.floor(Math.random()*colors.length)];
}

function changenames(){
 document.querySelector('p').innerHTML = names[Math.floor(Math.random()*names.length)];
}
setInterval(changeBgColor,1000);
setInterval(changenames,1000);