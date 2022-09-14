
//ini AOS animation 
AOS.init();


// remove loading page
function loadingPage() {
    document.getElementById("load").style.display = "none";
}
window.onload = function () {
    setTimeout(loadingPage, 4000)
}


//scroll to top 
const mybutton = document.getElementById("myBtn");
function scrollToTopFunction() {
    if (document.body.scrollTop >= 400 || document.documentElement.scrollTop > 400) {
        mybutton.classList.remove("hide");
        mybutton.classList.add("view");
    } else {
        mybutton.classList.remove("view");
        mybutton.classList.add("hide");
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// scrollspy function
var MySections = document.querySelectorAll(".section");
var navLinks = document.querySelectorAll(".nav-link");
function scrollSpy() {
    MySections.forEach(section => {
        var top = window.scrollY;
        var theoffset = section.offsetTop - 250;
        var height = section.offsetHeight;
        var sectionId = section.getAttribute('id');

        if (top >= theoffset && top < theoffset + height) {
            navLinks.forEach(linK => {
                linK.classList.remove("active");
                document.querySelector('div .links a[href*=' + sectionId + ']').classList.add("active");
            });
        };
    });
};
window.onscroll = function () {
    scrollSpy();
    scrollToTopFunction();
};



// dark and night mode function
var divsOnDayMode = document.getElementsByClassName("day-card");
var checkIfEven = 1;
function checkEvenOrOdd() {
    checkIfEven = window.localStorage.getItem("check");
    if ((checkIfEven % 2) != 0) {
        document.getElementById("selectCircle").classList.add("day-circle");

        document.body.classList.add("day-mode");

        document.getElementById("selectImage").removeAttribute("src");
        document.getElementById("selectImage").setAttribute("src", "assets/imgs/sunny.png");

        for (let i = 0; i < divsOnDayMode.length; i++) {
            divsOnDayMode[i].classList.add("div-day");
        }

        document.getElementById("Nav").classList.add("day-nav");

    } else {
        document.getElementById("selectCircle").classList.remove("day-circle");

        document.body.classList.remove("day-mode");

        document.getElementById("selectImage").removeAttribute("src");
        document.getElementById("selectImage").setAttribute("src", "assets/imgs/moon.png");

        for (let i = 0; i < divsOnDayMode.length; i++) {
            divsOnDayMode[i].classList.remove("div-day");
        }

        document.getElementById("Nav").classList.remove("day-nav");
    }
}

document.getElementById("select").onclick = function () {
    checkIfEven++;
    window.localStorage.setItem("check", checkIfEven);
    checkEvenOrOdd();
}
checkEvenOrOdd();