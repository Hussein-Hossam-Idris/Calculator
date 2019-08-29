
let calcMemory = [];
let calcDisplay = document.getElementById('text_half');
let buttonClick = document.querySelectorAll('.button_n');
let opeClick = document.querySelectorAll('.button_o')
let euqlButton = document.getElementById('=');
let _finalAwnser = document.getElementById('final');
let clearButton = document.getElementById('clear');
//let deleteButton = document.getElementById('back_space');
let temp = '';

for(let i = 0 ; i < buttonClick.length ; i++){
    buttonClick[i].addEventListener('click',function(){
        calcDisplay.textContent+=buttonClick[i].textContent;
        temp+=buttonClick[i].textContent;
        
    });
}
for(let i = 0 ; i < opeClick.length ; i++){
    opeClick[i].addEventListener('click',function(){
        calcMemory.push(Number(temp));
        temp='';
        calcDisplay.textContent+=opeClick[i].textContent;
        calcMemory.push(opeClick[i].textContent);
    });
}

euqlButton.addEventListener('click',function(){
    calcMemory.push(Number(temp));
    temp='';
for(let i = 0 ; i < calcMemory.length ; i++){
    if(calcMemory[i]=='*' || calcMemory[i]=='/'){
        calcMemory[i-1] = operate(calcMemory[i-1],calcMemory[i],calcMemory[i+1]);
        calcMemory.splice(i,2);
        --i;
    }
  
   
}
for(let i = 0 ; i < calcMemory.length ; i++){
    if(calcMemory[i] == '+' || calcMemory[i]=='-'){
        calcMemory[i-1] = operate(calcMemory[i-1],calcMemory[i],calcMemory[i+1]);
        calcMemory.splice(i,2);
        --i;
        
    }
}
 _finalAwnser.textContent = '';
 _finalAwnser.textContent += calcMemory[0]; 
 calcDisplay.textContent='';
 calcMemory.splice(0,calcMemory.length);

 
});

clearButton.addEventListener('click',function(){
    _finalAwnser.textContent = '';
    calcDisplay.textContent='';
    calcMemory.splice(0,calcMemory.length);
})
/*
deleteButton.addEventListener('click',function(){
   
    if(calcDisplay.textContent[calcDisplay.length]=='*' || calcDisplay.textContent[calcDisplay.length]=='/' || calcDisplay.textContent[calcDisplay.length]=='+' || calcDisplay.textContent[calcDisplay.length]=='-'  ){
        calcDisplay.textContent =  calcDisplay.textContent.slice(0, -1);
        calcMemory.pop();
    }else{
        calcDisplay.textContent =  calcDisplay.textContent.slice(0, -1);
        temp = temp.slice(0, -1);
        calcMemory.pop();
    }
})
*/
function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
function operate(a, ope, b){

    if(ope == '+'){
        return add(a,b);
    }else if(ope == '-'){
        return subtract(a,b);
    }else if(ope == '*'){
        return multiply(a,b);
    }else{
        return divide(a,b);
    }
}




/*

*/
