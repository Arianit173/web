function showMessage(){
    alert("This message is inside the function")
}
showMessage();
function sum(number1,number2){
    return number1 + number2;
}
console.log(sum(25,5));

function toCelsius(f){
    return (5/9) * (f-32);
}
console.log("54 fahrenheit is equal to " +toCelsius(54)+" celsius.")

function toSeconds(s){
    return s * 60;
}
console.log("60 minutes is equal to " +toSeconds(60)+" seconds")

function triangleArea(a,h){
    return 0.5 * a * h;

}
console.log(triangleArea(5,6))

function dsFunction(){
    var localvar= "Digital School";
    alert(localvar)
}

dsFunction();

// alert(localvar);
// Arrow Functions

var arrowFunction =()=>alert("Hello World");
arrowFunction();

var arrowFunction = name=> alert(`Hello ${name}`);
arrowFunction("John Doe")

// Objects
var car ={
    name:"Mercedes",
    color:"red",
    year:"2020",
    kilometers:0,
    startEngine: function(){
        alert("Vroommmm");
    },
    get getKilometers(){
        return this.kilometers;
    },

    set setKilometers(km){
        this.kilometers = km;
    }
}
console.log(car.getKilometers);

car.setKilometers =100;

console.log(car.getKilometers);

var computer = new Object();

computer.name = "Lenovo";
computer.CPU ="Intel core i7";
computer.RAM ="16GB";
computer.GPU="GeForce GT730 2GB Dual DP HP";

computer.type = function() {
    return this.name + " ," + this.CPU + ", " + this.RAM + ", " + this.GPU;
}

alert(computer.CPU);
alert(computer.type());

function Computer(name, CPU,RAM,GPU) {
    this.name = name;
    this.CPU= CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}

var computer1= new Computer("macBook","M1 8-CORE", "8GB", "Intel");

var computer2= new Computer("Acer","Intel core i3", "4GB","Intel");