const root = document.documentElement;

const lightDarkToggle = document.querySelector(".bb8-toggle");
const lightDarkCheckbox = document.querySelector(".bb8-toggle__checkbox")

const thunderingYellow = document.querySelector("#thundering-yellow");
const fieryRed = document.querySelector("#fiery-red");
const icyBlue = document.querySelector("#icy-blue");
const naturalGreen = document.querySelector("#natural-green");
const eliteViolet = document.querySelector("#elite-violet");

const frontCard = document.querySelector("#frontcard")
const backCard = document.querySelector("#backcard")

let themeMode = "light";
let theme;

const themeModeSet = () => {
    let num = Math.random() * 10000;
    let roundNum = Math.floor(num);

    if (roundNum%2 === 1) {
        themeMode = "light";
        console.log("Initial theme mode is ", themeMode);
    }
    else if (roundNum%2 === 0) {
        themeMode = "dark";
        console.log("Initial theme mode is ", themeMode);
        lightDarkCheckbox.checked = true;
    }
};

const themeSet = () => {
    let num = Math.random() * 10000;
    let roundNum = Math.floor(num);

    if (roundNum%5 === 0) {
        theme = "icy";
        console.log("Initial theme is", theme)
    }
    else if (roundNum%5 === 1) {
        theme = "thundering";
    }
    else if (roundNum%5 === 2) {
        theme = "natural";
    }
    else if (roundNum%5 === 3) {
        theme = "fiery";
    }
    else if (roundNum%5 === 4) {
        theme = "elite";
    }
    console.log("Initial theme is", theme);
};

const darkLightSwap = () => {
    if (themeMode === "dark") {
        themeMode = "light";
        console.log("Theme Mode is Light now");
        root.style.setProperty('--cform1', '#970ca6');
        root.style.setProperty('--cform2', '#155872');
    }
    else if (themeMode === "light") {
        themeMode = "dark";
        console.log("Theme Mode is Dark now");
        root.style.setProperty('--cform1', '#e81cff');
        root.style.setProperty('--cform2', '#40c9ff');
    }
};

const themeCheck = () => {
    if (themeMode === "light" && theme === "icy") {
        root.style.setProperty('--cdominant', '#1dafbb');
        root.style.setProperty('--cback', '#cdedfd');
        root.style.setProperty('--cbacksec', '#c2e5fe');
        root.style.setProperty('--ctext', '#210b2c');
        root.style.setProperty('--cheader', '#38369A60');
        root.style.setProperty('--cnav', '#38369A30');
    }
    //done
    else if (themeMode === "dark" && theme === "icy") {
        root.style.setProperty('--cdominant', '#58fcec');
        root.style.setProperty('--cback', '#093a5e');
        root.style.setProperty('--cbacksec', '#033249');
        root.style.setProperty('--ctext', '#b7e3ee');
        root.style.setProperty('--cheader', '#38369A60');
        root.style.setProperty('--cnav', '#38369A30');
    }
    //done
    else if (themeMode === "light" && theme === "fiery") {
        root.style.setProperty('--cdominant', '#F02D3A');
        root.style.setProperty('--cback', '#EFF6EE');
        root.style.setProperty('--cbacksec', '#C0C7CE');
        root.style.setProperty('--ctext', '#0a0f0a');
        root.style.setProperty('--cheader', '#c9427760');
        root.style.setProperty('--cnav', '#c9427730');
    }
    //done
    else if (themeMode === "dark" && theme === "fiery") {
        root.style.setProperty('--cdominant', '#c07190');
        root.style.setProperty('--cback', '#2a2e34');
        root.style.setProperty('--cbacksec', '#3b3f48');
        root.style.setProperty('--ctext', '#fafafa');
        root.style.setProperty('--cheader', '#c9427760');
        root.style.setProperty('--cnav', '#c9427730');
    }
    else if (themeMode === "light" && theme === "natural") {
        root.style.setProperty('--cdominant', '#248232');
        root.style.setProperty('--cback', '#EBF6ED');
        root.style.setProperty('--cbacksec', '#b7d9bf');
        root.style.setProperty('--ctext', '#144921');
        root.style.setProperty('--cheader', '#3bc14a60');
        root.style.setProperty('--cnav', '#3bc14a30');
    }
    //done
    else if (themeMode === "dark" && theme === "natural") {
        root.style.setProperty('--cdominant', '#93A793');
        root.style.setProperty('--cback', '#192E20');
        root.style.setProperty('--cbacksec', '#14281D');
        root.style.setProperty('--ctext', '#C2A878');
        root.style.setProperty('--cheader', '#3bc14a60');
        root.style.setProperty('--cnav', '#3bc14a30');
    }
    //done
    else if (themeMode === "light" && theme === "thundering") {
        root.style.setProperty('--cdominant', '#EC7357');
        root.style.setProperty('--cback', '#FBFFB9');
        root.style.setProperty('--cbacksec', '#FCF5B0');
        root.style.setProperty('--ctext', '#754F44');
        root.style.setProperty('--cheader', '#ee964b60');
        root.style.setProperty('--cnav', '#ee964b30');
        
    }
    //done
    else if (themeMode === "dark" && theme === "thundering") {
        root.style.setProperty('--cdominant', '#ffee32');
        root.style.setProperty('--cback', '#2a2e34');
        root.style.setProperty('--cbacksec', '#3b3f48');
        root.style.setProperty('--ctext', '#fafafa');
        root.style.setProperty('--cheader', '#ee964b60');
        root.style.setProperty('--cnav', '#ee964b30');
    }
    else if (themeMode === "light" && theme === "elite") {
        root.style.setProperty('--cdominant', '#9E4770');
        root.style.setProperty('--cback', '#fbfbfb');
        root.style.setProperty('--cbacksec', '#C8C6C9');
        root.style.setProperty('--ctext', '#631D76');
        root.style.setProperty('--cheader', '#610F7F60');
        root.style.setProperty('--cnav', '#610f7f30');
    }
    //done
    else if (themeMode === "dark" && theme === "elite") {
        root.style.setProperty('--cdominant', '#E2F1AF');
        root.style.setProperty('--cback', '#511730');
        root.style.setProperty('--cbacksec', '#320A28');
        root.style.setProperty('--ctext', '#F5CCE8');
        root.style.setProperty('--cheader', '#610F7F60');
        root.style.setProperty('--cnav', '#610f7f30');
    }
    //done
};

const visitingCardSetup = () => {
    if (theme === "icy") {
        frontCard.innerHTML = '<img src="images/IcyFront.png">';
        backCard.innerHTML = '<img src="images/IcyBack.png">';
    }
    else if (theme === "fiery") {
        frontCard.innerHTML = '<img src="images/FieryFront.png">';
        backCard.innerHTML = '<img src="images/FieryBack.png">';
    }
    else if (theme === "natural") {
        frontCard.innerHTML = '<img src="images/NaturalFront.png">';
        backCard.innerHTML = '<img src="images/NaturalBack.png">';
    }
    else if (theme === "thundering") {
        frontCard.innerHTML = '<img src="images/ThunderingFront.png">';
        backCard.innerHTML = '<img src="images/ThunderingBack.png">';
    }
    else if (theme === "elite") {
        frontCard.innerHTML = '<img src="images/EliteFront.png">';
        backCard.innerHTML = '<img src="images/EliteBack.png">';
    }
}

themeModeSet();
themeSet();
themeCheck();
visitingCardSetup();

lightDarkToggle.addEventListener("change", () => {
    darkLightSwap();
    themeCheck();
    visitingCardSetup();
});

thunderingYellow.addEventListener("click", () => {
    theme = "thundering";
    themeCheck();
    visitingCardSetup();
});

naturalGreen.addEventListener("click", () => {
    theme = "natural";
    themeCheck();
    visitingCardSetup();
});

fieryRed.addEventListener("click", () => {
    theme = "fiery";
    themeCheck();
    visitingCardSetup();
});

icyBlue.addEventListener("click", () => {
    theme = "icy";
    themeCheck();
    visitingCardSetup();
});

eliteViolet.addEventListener("click", () => {
    theme = "elite";
    themeCheck();
    visitingCardSetup();
});

let menuState = "menu";
const menuIcon = document.querySelector("#menu-icon");
const navMenu = document.querySelector("#nav-menu");
const navMenuButton = document.querySelectorAll(".nav-menu-btn");

const menuStateChange = () => {
    if (menuState === "menu") {
        navMenu.style.display = "flex";
        menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        menuState = "cross";
    }
    else if (menuState === "cross") {
        navMenu.style.display = "none";
        menuIcon.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
        menuState = "menu";
    }
}

menuIcon.addEventListener("click", menuStateChange);
navMenuButton.forEach((button) => {
    button.addEventListener("click", () => {
        navMenu.style.display = "none";
        menuIcon.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
        menuState = "menu";
    })
});

const formFlash = document.querySelector("#form-submitted");
const myForm = document.querySelector(".form");
myForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    formFlash.innerHTML = '<i class="fa-solid fa-check"></i> Message sent Successfully';
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbxzj6Y6pIs4_a_krMdXNwmBJ5ZaKAC28qWJp206QDiP5d56rjg3Dr7vvuvLd2vSWYri/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})