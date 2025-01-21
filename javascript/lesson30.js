// var x=5;
// if (x>2){
//     console.log("The value of x is greater than 2");
    
// // }else(x<2){
// //     console.log("The value of x is lower than 2");
    
// // }





// var input=document.getElementById("input_id");
// var button=document.getElementById("btn_id");
// var text=document.getElementById("text_id");

// button.onclick=function(){
//     text.innerHTML=input.value

// }

var input=document.getElementById("input");
var btn=document.getElementById("btn");
var h1=document.getElementById("h1");

btn.onclick=function(){
    if(input.value >10){
        h1.innerHTML="Input value is greater than 10";
    }else if(input.value <10){
        h1.innerHTML="Input value is less than 10";
    }else{
        h1.innerHTML="Input value is equal to 10";
    }
}