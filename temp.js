var temp = document.getElementById('temperature').selectedIndex;
// var option = document.getElementsByTagName('option')[temp];
var option = document.getElementById("temperature").options;
var num = document.getElementById('number').value;

function result(){
  document.getElementById('result').innerHTML = num;
}
function convert(){
 if(option[temp].index === 1){
   alert(option[temp].text)
   var faren = Math.floor(num-32*(5/9));
   document.getElementById('result').innerHTML = faren+'C';
 }else if(option[temp].index === 2){
   var cels = Math.floor(9/5*(num+32));
   document.getElementById('result').innerHTML = cels+'F';
 }
}
