let input = document.getElementById('display');
buttons = document.querySelectorAll('button');
let displayValue = '';
for(item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if(buttonText=='x') {
            buttonText = '*';
            displayValue += buttonText;
            display.value =  displayValue;
        }
        else if(buttonText=='AC') {
            displayValue = "";
            display.value = displayValue;
        }
        else if(buttonText=='=') {
            display.value = eval(displayValue);
            displayValue = display.value;
        }
        else if(buttonText==''){
            var number=display.value;
            var len=number.length-1;
            var newnumber=number.substring(0,len);
            display.value=newnumber;
        }
        else {
            displayValue += buttonText;
            display.value = displayValue;
        }
    })
}