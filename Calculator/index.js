let display=document.getElementById("container");
let curr='0';
let operator=null;
let next=false;


function getNo(number){
if(next){
  curr=number;
  next=false;
}else{
    curr=(curr==='0')?number:(curr+number);
}
updateDisplay();
}


function clearAll(){
curr='0';
operator=null;
next=false;
updateDisplay();
}

function getOperator(op){
if(operator!==null && !next){
    calculate();
}
else{
    operator=op;
    next=true;
}
}

function calculate(){
const prev=parseFloat(display.textContent);
const newNo=parseFloat(curr);
if(isNaN(prev) || isNaN(newNo)){
    return;
}
switch(operator){
    case '+':
        curr=prev+newNo;
        break;
    case '-':
        curr=prev-newNo;
        break;
    case '*':
        curr=prev*newNo;
        break;
    case '/':
        if(newNo!==0){
        curr=prev/newNo;
        }else{
            curr='Error';
        }
        break;
    case '%':
        curr=prev+newNo;
        break;
    case '&#8730':
        curr=prev+newNo;
        break;
    default:
        return

}
operator=null;
next=false;
updateDisplay();
}

function addDecimal() {
    if (!curr.includes('.')) {
        curr += '.';
        history += '.';
        updateDisplay();
    }
}



function updateDisplay() {
display.textContent=curr;
}