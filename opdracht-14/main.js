function kiesDrankje() {
      let keuze = prompt("Wat wil je drinken? (cola, water, koffie)");
      keuze = keuze.toLowerCase();
 
      let tekst = "";
      let kleur = "";
 
     
      if (keuze === "cola") {
        tekst = "Je krijgt een blikje cola 🥤";
        kleur = "black";
      } else if (keuze === "water") {
        tekst = "Goed bezig, lekker gezond 💧";
        kleur = "blue";
      } else if (keuze === "koffie") {
        tekst = "Energie incoming ☕️";
        kleur = "brown";
      } else {
        tekst = "Dat drankje is helaas op";
        kleur = "red";
      }
 
     
      let boodschap = document.getElementById("boodschap");
      boodschap.textContent = tekst;
      boodschap.style.color = kleur;
    }