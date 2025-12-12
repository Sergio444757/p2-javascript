const titel = document.getElementById("titel");
 
    let isHallo = true;
 
    titel.addEventListener("click", function() {
      if (isHallo) {
        titel.textContent = "Doeg";          
        titel.style.color = "red";          
        document.body.style.backgroundColor = "lightblue";
      } else {
        titel.textContent = "Hallo";
        titel.style.color = "green";
        document.body.style.backgroundColor = "lightyellow";
      }
      isHallo = !isHallo;
    });
 