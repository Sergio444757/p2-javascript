let aantal = 0;
 
    function updateTeller() {
      let teller = document.getElementById("aantal");
      let melding = document.getElementById("melding");
 
      teller.textContent = "Aantal: " + aantal;
 
     
      if (aantal >= 5) {
        melding.textContent = "Pauze? Water is ook lekker";
        teller.style.color = "red";
      } else if (aantal >= 3) {
        melding.textContent = "Dat zijn er best veel…";
        teller.style.color = "orange";
      } else {
        melding.textContent = "";
        teller.style.color = "green";
      }
    }
 
    function plusEen() {
      aantal++;
      updateTeller();
    }
 
    function minEen() {
      if (aantal > 0) {
        aantal--;
        updateTeller();
      }
    }
 
    function reset() {
      aantal = 0;
      updateTeller();
    }
 
    updateTeller();