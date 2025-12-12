let budget = 100;
 
    function checkBudget() {
      let product = prompt("Hoeveel kost het product dat je wilt kopen?");
      product = Number(product);
 
      let resultaat = document.getElementById("result");
 
     
      if (budget >= product) {
        resultaat.textContent = "U heeft genoeg geld!";
        resultaat.style.color = "green";
      } else {
        resultaat.textContent = "Helaas, te weinig geld";
        resultaat.style.color = "red";
      }
    }