const liste1 = [
  "⌬⟁ ⊗⟟ ⌁⟁ ☉⟟ ∴",
  "☉⟟ ⌁⟟ ⟁⌬ ⊘ ∎",

  "⌬⌁ ⟟⟁ ⊗⌬ ⟁⟁",
  "⊗⟟ ☍ ⌁⌬ ∴ ☉",

  "☉⌬ ⌬⟟ ⊗⌁ ⟁",
  "∎ ∎ ⌁☉ ⊘",

  "⟟⌬ ⊗☉ ⟁⌁ ☍",
  "⌁⌁ ⊘ ⟟⌬ ∎",

  "☉ ⊗⌬ ⌬⌬ ⟁",
  "⊘ ☍ ☍ ⌁",

  "⌬⟁ ⟟⟟ ∴ ⊗",
  "∎ ⌁ ⌁ ☉",

  "⊗⌁ ☍ ⌬⟁",
  "⟟☉ ⊘ ∎",

  "⌬ ⌬ ⌬ ⟟",
  "☉ ☉ ⊗ ⌁",

  "∴ ⊘ ⌬ ☍",
  "∎ ∎ ⌁",

  "☉ ⊗ ⟟ ⌬",
  " ∎"
];

const characterNames = [
  "⟁⟟⌬☉",
  "⊗⌁⟁∴",
  "☍⌬⟟⊘",
  "⌁☉⌬∎",
  "∴⊗⟟⟁"
];
const listeright = ["mornye.png","lynae.png","xiangliyao.png"];
const listelefto = [0.7,1,0.7,1,0.7,1];
const listerighto = [1,0.7,1,0.7,1,0.7];
const names = ["mornye.png","lynae.png","xiangliyao.png"];
const dialoguenum = [1,2,1,2,3,1,2,3,1,2,1,2,1,2,3,1,2,3,1,2];
localStorage.setItem('res1', 0);
let a = 0;
let dia = 0;
let i = 0;
function playTypewriter(message) {
  let i = 0;
  let speed = 50;
  const displayElement = document.getElementById("dial");
  displayElement.innerHTML = "";
  function type() {
    if (i < message.length) {
      displayElement.innerHTML += message.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}
function next(){
    if(dia>=(liste1.length-1)){
        alert("Diyalog Sonu, Bossun gücü azaldı.")
        localStorage.setItem('res1', '1');
    }
    else{
        dia = dia +1;
        playTypewriter(liste1[dia]);
        a = dialoguenum[dia];
        document.getElementById("leftc").src = listeright[a-1];
        document.getElementById("rightc").src = listeright[a];
        document.getElementById("name").innerText = characterNames[a];
        document.getElementById("leftc").style.opacity = listelefto[a];
        document.getElementById("rightc").style.opacity = listerighto[a];
    }
}
function prev(){
    if(dia<=0){
        alert("Geriye Gidemezsin")
    }
    else{
        dia = dia -1;
        a = dialoguenum[dia];
        playTypewriter(liste1[dia]);
        document.getElementById("leftc").src = listeright[a-1];
        document.getElementById("rightc").src = listeright[a];
        document.getElementById("name").innerText = characterNames[a];
        document.getElementById("leftc").style.opacity = listelefto[a];
        document.getElementById("rightc").style.opacity = listerighto[dia];

    }
}