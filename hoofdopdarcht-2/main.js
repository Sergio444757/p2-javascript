 let aantal = 0;
 
    function klikPizza() {
      aantal++;
      updatePizza();
    }
 
    function reset() {
      aantal = 0;
      updatePizza();
    }
 
    function openOverlay() {
      const overlay = document.getElementById("overlay");
      overlay.classList.add("overlay--open");
      overlay.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }
 
    function closeOverlay() {
      const overlay = document.getElementById("overlay");
      overlay.classList.remove("overlay--open");
      overlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
 
    function playAgain() {
      aantal = 0;
      closeOverlay();
      updatePizza();
    }
 
    function updatePizza() {
      const teller = document.getElementById("pizzaTeller");
      const bericht = document.getElementById("bericht");
 
      teller.textContent = aantal + " pizza!";
 
     
      teller.className = "";
      if (aantal >= 20) {
        bericht.textContent = "Klasse-traktatie!";
        teller.classList.add("rood");
      } else if (aantal >= 10) {
        bericht.textContent = "";
        openOverlay();
      } else if (aantal >= 5) {
        bericht.textContent = "Dat begint ergens op te lijken 😋";
        teller.classList.add("oranje");
      } else {
        bericht.textContent = "";
        teller.classList.add("groen");
      }
    }
 
   
    updatePizza();