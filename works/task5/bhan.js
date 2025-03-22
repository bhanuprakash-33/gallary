      
function add(){
    let a=parseInt(document.getElementById('num1').value);
    let b=parseInt(document.getElementById('num2').value);
let res=a+b;
    document.getElementById('res').value=res;
}
function mul(){
    let a=parseInt(document.getElementById('num1').value);
    let b=parseInt(document.getElementById('num2').value);
let res=a*b;
    document.getElementById('res').value=res;
}
function div(){
    let a=parseInt(document.getElementById('num1').value);
    let b=parseInt(document.getElementById('num2').value);
let res=a/b;
if(b==0)
{
    alert("y should not be zero");
    return;
}
    document.getElementById('res').value=res;
}
function sub(){
    let a=parseInt(document.getElementById('num1').value);
    let b=parseInt(document.getElementById('num2').value);
let res=a-b;
    document.getElementById('res').value=res;
}