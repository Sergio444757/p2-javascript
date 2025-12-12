const blok = document.getElementById("blok");
    const tekst = document.getElementById("tekst");
 
   
    blok.addEventListener("mouseover", function() {
      blok.style.backgroundColor = "lightgreen";  
      blok.style.width = "220px";                  
      blok.style.height = "220px";
      blok.style.border = "5px solid black";      
      tekst.style.display = "block";              
    });
 
   
    blok.addEventListener("mouseout", function() {
      blok.style.backgroundColor = "lightcoral";  
      blok.style.width = "200px";
      blok.style.height = "200px";
      blok.style.border = "none";                
      tekst.style.display = "none";                
    });