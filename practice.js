let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach(button => {
   button.addEventListener('click', (e) => { 
      if(e.target.innerHTML === "=") {
         string = eval(string);
         inputBox.value = string;
      }

      else if(e.target.innerHTML === "AC") {
         string = "";
         inputBox.value = string;
      }

      else if(e.target.innerHTML === "DEL") {
         string = string.slice(0, string.length - 1);
         inputBox.value = string;
      }

      else {
        string += e.target.innerHTML;
         inputBox.value = string;
      }
   
      
   })
});

document.addEventListener("keydown", (e)=> {
   if(e.key === "Enter") {
      e.preventDefault();
      string = eval(string);
      inputBox.value = string;
      string = "";
   }
});
