const words = ["anger", "happy", "peace", "coding", "banana", "python"];
let currentWord = "";

function newWord() {
currentWord = words[Math.floor(Math.random() * words.length)];
document.getElementById("word").textContent = currentWord;
document.getElementById("input").value = "";
}

document.getElementById("input").addEventListener("input", (e) => {
if (e.target.value === currentWord) {
document.getElementById("result").textContent = "✅ Good!";
newWord();
}
});

newWord();

