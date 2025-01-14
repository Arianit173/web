// var button1 = document.getElementById('btn')

// button1.onclick = function(){
//    alert('hello')
// }
// var button1= document.querySelector('button')

// button1.addEventListener('click', function(){
//     alert('hello world')
// })

// var button2=document.getElementById('btn1');
// var button3=document.getElementById('btn2');
// var button4=document.getElementById('btn3');

// button2.onmouseover= function(){
//     alert('over')
// }
// button3.onmouseleave= function(){
//     alert('leave')
// }
// button4.onmousewheel= function(){
//     alert('wheel')
// }
// var v_button=document.getElementById('button1');
// var v_text=document.getElementById('txt1');

// v_button.onclick = function(){
//     // v_text.style.color="red";
//     // v_text.style.backgroundColor="lightgrey";
//     // v_text.style.fontSize="100px";
//     // v_text.style.padding="200px";
//     v_text.setAttribute("class","test")
// }

// v_text.onmouseover = function(){
//  v_text.style.cssText="color:red; background-color:blue; text-align: center; font-size:100px; padding:20px;"

// }
var btn_circle=document.getElementById('btncircle');
var btn_rect=document.getElementById('btnrect');
var btn_triangle=document.getElementById('btntriangle');

var circle=document.getElementById('circle');
var rect=document.getElementById('rectangle');
var triangle=document.getElementById('triangle');

btn_circle.onclick= function(){
    circle.setAttribute("class","shape_circle")
}
btn_rect.onclick= function(){
    rect.setAttribute("class","shape_rect")
}
btn_triangle.onclick= function(){
    triangle.setAttribute("class","shape_triangle")
}

circle.onclick= function(){
    circle.setAttribute("class","hide")
}
rect.onclick= function(){
    rect.setAttribute("class","hide")
}
triangle.onclick= function(){
    triangle.setAttribute("class","hide")
}