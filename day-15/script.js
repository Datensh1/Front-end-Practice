let title = document.getElementById("title");
let text = document.getElementsByClassName("text");
let message = document.getElementById("message");
let photo = document.getElementById("photo");
let btn = document.getElementById("btn");
let result = document.getElementById("result");
let total = 0;
let toggle = document.getElementById("toggle");
let box = document.getElementById("box");
let input = document.getElementById('input')
let count = document.getElementById('count')
console.log(title);


console.log(text);
console.log(text[0].textContent);

title.textContent = "Dom is Powerful";
message.style.color = "red";
message.style.fontSize = "30px";
photo.src = "dog.jpg";
function changeText() {
  total += 1;
  result.textContent = total;
  if (total >= 10) {
    result.style.color = "green";
    btn.disabled = true;
    btn.textContent = "Done";

    setTimeout(function () {
      total = 0;
      result.textContent = total; // reset display
      result.style.color = "black"; // reset color
      btn.disabled = false; // enable button
      btn.textContent = "Click Me"; // reset text
    }, 2000);
  }
}

function darkMode() {
   
  if (toggle.textContent.includes('Dark')) {
    toggle.textContent = 'Toggle Light Mode'
    box.style.backgroundColor = " black";
    box.style.color = "white";
  } else if(toggle.textContent.includes('Light')) {
    toggle.textContent = 'Toggle Dark Mode'
    box.style.backgroundColor = "white";
    box.style.color = "black";
  }
}

function counter(e){
    let length =e.target.value.length
    count.textContent = length
    if(length>10){   
        count.style.color = 'red'
    }else{  count.style.color = 'black'}
 
}


input.addEventListener('input',counter)
toggle.addEventListener("click", darkMode);
btn.addEventListener("click", changeText);
