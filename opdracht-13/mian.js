 function checkLeeftijd() {
      let leeftijd = prompt("Wat is je leeftijd?");
      leeftijd = Number(leeftijd);
 
      let tekst = "";
      let kleur = "";
 
     
      if (leeftijd < 18) {
        tekst = "Je mag hier nog niet naar binnen.";
        kleur = "red";
      } else if (leeftijd >= 18 && leeftijd < 65) {
        tekst = "Welkom, volwassen bezoeker!";
        kleur = "green";
      } else {
        tekst = "Welkom, senior bezoeker!";
        kleur = "green";
      }
 
      let uitkomst = document.getElementById("uitkomst");
      uitkomst.textContent = tekst;
      uitkomst.style.color = kleur;
    }