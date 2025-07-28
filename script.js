//calculator program

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value  +=input;
    
}


function ClearDisplay(){
    display.value ="";
    

}

function calculate() {
    try{
display.value= eval(display.value);
    }
    catch(error)
    {

        display.value = " ERROR"
    }
    
    
}

 // i added the delet button 
  function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
 // i have added the keyboard functionality
  document.addEventListener("keydown", function (event) {
    let key = event.key;
    const allowedKeys = "0123456789+-*/.";
    if (allowedKeys.includes(key)) {
      appendToDisplay(key);
    } else if (key === "Enter") {
      calculate();
    } else if (key === "Backspace") {
      deleteLast();
    } else if (key === "Escape") {
      clearDisplay();
    }
  });
//adding theme thatw dark and light theme
  function toggleTheme() {
    document.body.classList.toggle("dark-theme");
  }
  //SHOWING HISTORY
   function calculate() {
    try {
      let expression = document.getElementById("display").value;
      let result = eval(expression);
      document.getElementById("display").value = result;
      let history = document.getElementById("history");
      history.innerHTML += `<div>${expression} = ${result}</div>`;
    } catch {
      document.getElementById("display").value = "Error";
    }
  }
