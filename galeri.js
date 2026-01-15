
const lock = localStorage.getItem('res1');
const lock2 = localStorage.getItem('res2');
const lock3 = localStorage.getItem('bosswin');

if(lock == '1'){
    document.getElementById("im1").style.filter = "none";
    document.getElementById("im2").style.filter = "none";
    document.getElementById("im5").style.filter = "none";
    document.getElementById("im6").style.filter = "none";
    document.getElementById("lck1").innerHTML = "";
    document.getElementById("lck2").innerHTML = "";
    document.getElementById("lck5").innerHTML = "";
    document.getElementById("lck6").innerHTML = "";
}
if(lock2 == '1'){
    document.getElementById("im3").style.filter = "none";
    document.getElementById("im7").style.filter = "none";
    document.getElementById("lck3").innerHTML = "";
    document.getElementById("lck7").innerHTML = "";
}
if(lock3== '1'){
    document.getElementById("im4").style.filter = "none";
    document.getElementById("im8").style.filter = "none";
    document.getElementById("lck4").innerHTML = "";
    document.getElementById("lck8").innerHTML = "";

}
function checkLock(id, fullImgUrl) {
    const lock = localStorage.getItem('res1');
    if (lock === '1') {
        openLightbox(fullImgUrl);
    } else{
        alert("Hikayede ilerle");
    }
}
function checkLock2(id, fullImgUrl) {
    const lock2 = localStorage.getItem('res2');
    if (lock2 === '1') {
        openLightbox(fullImgUrl);
    } else{
        alert("Hikayede ilerle");
    }
}
function checkLock3(id, fullImgUrl) {
    const lock3 = localStorage.getItem('bosswin');
    if (lock3 === '1') {
        openLightbox(fullImgUrl);
    } else{
        alert("Hikayede ilerle");
    }
}


function openLightbox(url) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    
    lightboxImg.src = url;
    lightbox.style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}