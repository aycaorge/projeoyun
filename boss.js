let enemyHP = 200;
let playerHP = 100;
let x = localStorage.getItem("res1");
let y = localStorage.getItem("res2");
const liste1 = ["Yeteri kadar iyi degil!","Bu kadar mi?","Güldürme beni!"]
if(y == 1){
  enemyHP = 100;
}

function attack(moveName, attacker) {
  doWork();
  if (attacker === 'player') {
    enemyHP -= 20;
    updateBar('enemy-hp', enemyHP);
    animateHit('enemy-sprite');
    if (enemyHP <= 0) return endGame("Kazandın");
    setTimeout(() => {
      enemyAttack();
    }, 1000);
  }
}
function qattack(moveName, attacker) {
  doWork();
  if (attacker === 'player') {
    enemyHP -= 10;
    updateBar('enemy-hp', enemyHP);
    animateHit('enemy-sprite');
    if (enemyHP <= 0) return endGame("Kazandın");
    setTimeout(() => {
      enemyAttack2();
    }, 1000);
  }
}
function run(){
  alert("Kaçamazsın.... :)")
}
function enemyAttack() {
  showBubble();
  if (x == 1){
  playerHP -= 15;}
  else{
    playerHP -=50
  }
  updateBar('player-hp', playerHP);
  animateHit('player-sprite');
  if (playerHP <= 0) return endGame("Kaybettin");
}
function enemyAttack2() {
  showBubble2();
  if (x == 1){
  playerHP -= 5;}
  else{
    playerHP -=25
  }
  updateBar('player-hp', playerHP);
  animateHit('player-sprite');
  if (playerHP <= 0) return endGame("Kaybettin");
}


function updateBar(id, val) {
  const percent = Math.max(0, val);
  document.getElementById(id).style.width = percent + "%";
}

function animateHit(id) {
  const el = document.getElementById(id);
  el.classList.add('shake');
  setTimeout(() => el.classList.remove('shake'), 300);
}

function endGame(text) {
  alert(text);
  if(text == "Kazandın"){
    showBubble3();
    localStorage.setItem("bosswin",1);
  }
  document.querySelectorAll('button').forEach(b => b.disabled = true);
}

async function doWork() {
  const button = document.getElementById("at1");
  const button2 = document.getElementById("at2");
  button.disabled = true;
  button2.disabled = true; 

  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
  } finally {
    button.disabled = false;
    button2.disabled = false; 
  }
}

function showBubble() {
  const bubble = document.getElementById("chatBubble");
  bubble.style.display = "block";
  setTimeout(() => {
    bubble.style.display = "none";
  }, 3000);
}
function showBubble2() {
  const bubble = document.getElementById("chatBubble2");
  bubble.style.display = "block";
  setTimeout(() => {
    bubble.style.display = "none";
  }, 3000);
}
function showBubble3() {
  const bubble = document.getElementById("chatBubble3");
  bubble.style.display = "block";
  setTimeout(() => {
    bubble.style.display = "none";
  }, 3000);
}
