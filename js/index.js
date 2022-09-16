const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const aboutExtendedEl = document.querySelector('.about-me-extended')
const extendedMusicEl = document.getElementById("music");
const extendedTvEl = document.getElementById("tv");
const extendedTravelEl = document.getElementById("travel");
const extendedMusicBtnEl = document.getElementById("musicBtn");
const extendedTvBtnEl = document.getElementById("tvBtn");
const extendedTravelBtnEl = document.getElementById("travelBtn");
const sliderBtn1 = document.getElementById("btn1");
const sliderBtn2 = document.getElementById("btn2");
const sliderBtn3 = document.getElementById("btn3");
const sliderimg1 = document.getElementById("sliderimg1");
const sliderimg2 = document.getElementById("sliderimg2");
const sliderimg3 = document.getElementById("sliderimg3");

let count = 0;

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})

function showAboutExtended(){
    console.log(count);
    if(count === 0){
        aboutExtendedEl.style = 'display: flex';
        count = 1;
        revealTravel();
    } else if(count === 1) {
        aboutExtendedEl.style = 'display:none';
        count = 0;
    }
}

function revealMusic() {
    extendedMusicEl.style="display:block";
    extendedTravelEl.style="display:none";
    extendedTvEl.style="display:none";
    extendedMusicBtnEl.style="background-color:#9897a4;";
    extendedTvBtnEl.style="background-color:#8077ed;";
    extendedTravelBtnEl.style="background-color:#8077ed;";
}
function revealTv() {
    extendedMusicEl.style="display:none";
    extendedTravelEl.style="display:none";
    extendedTvEl.style="display:block";
    extendedMusicBtnEl.style="background-color:#8077ed;";
    extendedTvBtnEl.style="background-color:#9897a4;";
    extendedTravelBtnEl.style="background-color:#8077ed;";
}
function revealTravel() {
    extendedMusicEl.style="display:none";
    extendedTravelEl.style="display:block";
    extendedTvEl.style="display:none";
    extendedMusicBtnEl.style="background-color:#8077ed;";
    extendedTvBtnEl.style="background-color:#8077ed;";
    extendedTravelBtnEl.style="background-color:#9897a4;";
}

function revealFirst(){
    sliderBtn1.style.backgroundColor = "#8077ed";
    sliderBtn2.style.backgroundColor = "white";
    sliderBtn3.style.backgroundColor = "white";
    sliderimg1.style.display = "block";
    sliderimg2.style.display = "none";
    sliderimg3.style.display = "none";
}

function revealSecond(){
    sliderBtn1.style.backgroundColor = "white";
    sliderBtn2.style.backgroundColor = "#8077ed";
    sliderBtn3.style.backgroundColor = "white";
    sliderimg1.style.display = "none";
    sliderimg2.style.display = "block";
    sliderimg3.style.display = "none";
}

function revealThird(){
    sliderBtn1.style.backgroundColor = "white";
    sliderBtn2.style.backgroundColor = "white";
    sliderBtn3.style.backgroundColor = "#8077ed";
    sliderimg1.style.display = "none";
    sliderimg2.style.display = "none";
    sliderimg3.style.display = "block";
}

