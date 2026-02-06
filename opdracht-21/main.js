const activiteiten = ["wandelen", "mediteren", "een dutje doen", "sporten", "koken", "muziek luisteren"];
 
   
    const themas = ["een kop thee", "je favoriete boek", "je telefoon uitzetten", "een kaars", "een vriend bellen", "een warme trui"];
 
    function geefAdvies() {
      const randomAct = activiteiten[Math.floor(Math.random() * activiteiten.length)];
      const randomThema = themas[Math.floor(Math.random() * themas.length)];
 
      document.getElementById("advies").textContent =
        "Vandaag moet jij " + randomAct + " met " + randomThema + ".";
    }