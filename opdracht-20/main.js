let emoji = ["👉","🤞","👇","🖖","👉","🤘"];

let button = document.getElementById("emojiBtn");
let showEmoji = document.getElementById("showEmoji");

button.addEventListener("click",function(){
    let radomIndex = math.floor(math.radom() = emoji.length);

    showEmoji.innerHTML = emoji[radomIndex];

})