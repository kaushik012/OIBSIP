let input = document.getElementById('display');
buttons = document.querySelectorAll('button');
let displayValue = '';
for(item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if(buttonText =='x') {
            buttonText = '*';
            displayValue += buttonText;
            display.value =  displayValue;
        }
        else if(buttonText=='AC') {
            displayValue = "";
            display.value = displayValue;
        }
        else if(buttonText =='=') {
            display.value = eval(displayValue);
            displayValue = display.value;
        }
        else if (buttonText == '') {
            displayValue = displayValue.slice(0, (displayValue.length - 1));
            display.value = displayValue;
        }
        else {
            displayValue += buttonText;
            display.value = displayValue;
        }
    })
}
