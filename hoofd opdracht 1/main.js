let textMessage = document.getElementById("textMessage");
let lightbtn = document.getElementById("lightbtn");

function lightMode(){
    textMessage.innerHTML= "Goedendag ☀️";
    document.body.style.backgroundColor = "white";
     textMessage.style.color = "black";
     lightbtn.style.backgroundColor = "black";
     lightbtn.style.color = "white";
}

function darkMode(){
      textMessage.innerHTML= "Goedeavond 🌙";
      document.body.style.backgroundColor= "black";
      textMessage.style.color = "white";
}

