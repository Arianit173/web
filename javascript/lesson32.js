var input1 = document.getElementById('input_id');
var input2 = document.getElementById('input2_id');
var button = document.getElementById('btn_id');
// var ans = document.getElementById('answer');

// button.addEventListener('click', function(){
//     ans.innerHTML = parseInt(input1.value) + parseInt(input2.value);
// })

var text="The best school in the world is Digital School";
var result=text.replace("Digital School", "Another School");
console.log(result);

// var text2 ="abcdef";
// var regex = new RegExp("gjm");
// document.getElementById('answer').innerHTML =regex.test(text2);

var text2="Digital School is one of the 10 best schools in the world";
var regex =/[0-9]/g;
document.getElementById('answer').innerHTML =text2.match(regex);