const input = document.getElementById("wachtwoord");
    const feedback = document.getElementById("feedback");
    const teller = document.getElementById("teller");
 
   
    input.addEventListener("input", function() {
      const waarde = input.value;
      const lengte = waarde.length;
 
     
      if (lengte < 6) {
        feedback.textContent = "Wachtwoord te kort";
        feedback.style.color = "red";
      } else {
        feedback.textContent = "Sterk wachtwoord!";
        feedback.style.color = "green";
      }
 
     
      teller.textContent = "Je hebt nu " + lengte + " tekens ingevoerd.";
    });
 