let favding = ["voetball", "pizza", "BurnaBoy", "GTA5", "GYM"]
console.log(favding[0]); 
console.log(favding[1]); 
console.log(favding[2]); 
console.log(favding[3]); 
console.log(favding[4]);

console.log(favding.length);
let laatste = favding[favding.length - 1];
console.log(laatste);
document.getElementById("lijst").innerHTML =
  "Eerste item: " + favding[0] + "<br>" +
  "Laatste item: " + favding[favding.length - 1] + "<br>" +
  "Aantal items: " + favding.length;
 

 