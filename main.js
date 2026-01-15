x = localStorage.getItem("main");
if(x != 1){
    alert("İlk iki hikaye seçeneğinden birini ya da en alttaki bossfighti seç!")
    localStorage.setItem("main",1)
}
const tbtn = document.getElementById("topfield2");
    tbtn.addEventListener("click", function() {
    window.location.href = "pg2.html"; });
const tbtn2 = document.getElementById("topfield");
    tbtn2.addEventListener("click", function() {
    window.location.href = "pg2.html";});
const firstImage = document.querySelector('.field:nth-child(1) img');

function tophov(){
    document.getElementById("topfield").style.display = "none";
    document.getElementById("topfield2").style.display = "flex";
}
function topex(){
    document.getElementById("topfield").style.display = "flex";
    document.getElementById("topfield2").style.display = "none";
}
function midhov(){
    document.getElementById("midfield").style.display = "none";
    document.getElementById("midfield2").style.display = "block"
}
function midex(){
    document.getElementById("midfield").style.display = "block";
    document.getElementById("midfield2").style.display = "none";
}
function bothov(){
    document.getElementById("botfield").style.display = "none";
    document.getElementById("botfield2").style.display = "block"
}
function botex(){
    document.getElementById("botfield").style.display = "block";
    document.getElementById("botfield2").style.display = "none";
}
function clear(){
    localStorage.setItem("res1","0");
}
