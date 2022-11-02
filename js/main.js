/* ====== start dark mode ====== */

let dayNight = document.querySelector(".day-night");
let iDarkColor = document.querySelector(".day-night i");
let body = document.querySelector("body");

if(localStorage.getItem("theme") == null) {
    localStorage.getItem("theme", "light");
}

let d2localData = localStorage.getItem("theme");
if(d2localData == "light") {
    body.classList.remove("dark");
} else if (d2localData == "dark") {
    body.classList.add("dark");
}

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    if(body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});




/* ====== end dark mode ====== */

/*
==============================================
==============================================
*/

/* ====== start toggler ====== */

let navTogglerBtn = document.querySelector(".nav-toggler");
let aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
}

/* ====== end toggler ====== */

/*
==============================================
==============================================
*/


/* ====== start aside navbar ====== */

let TabsLi = document.querySelectorAll(".nav-menu li a");
let TabsArray = Array.from(TabsLi);
let Content = document.querySelectorAll(".content section");
let ContentArray = Array.from(Content);

TabsArray.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        asideSectionTogglerBtn();

        TabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });

        e.currentTarget.classList.add("active");
        ContentArray.forEach((div) => {
            div.style.display = "none";
        });
        
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
        
    });
});


window.addEventListener("resize", () => {
    aside.classList.remove("open");
    navTogglerBtn.classList.remove("open");
});



/*
let navTogglerBtn = document.querySelector(".nav-toggler");
let aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}


// let nav = document.querySelector(".nav-menu");
let navList = document.querySelectorAll(".nav-menu li");
let totalNavList = navList.length;
let allSection = document.querySelectorAll(".section");
let totalSection = allSection.length;


for (let i = 0; i < totalNavList; i++) {

    const a = navList[i].querySelector("a");

    a.addEventListener("click", function(){

        // remove back section class 
        // removeBackSectionClass();

        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }

        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                // add back section class
                // addBackSectionClass(j);
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}


// function removeBackSectionClass () {
//     for(let i = 0; i < totalSection; i++) {
//         allSection[i].classList.remove("back-section");
//     }
// }

// function addBackSectionClass(num) {
//     allSection[num].classList.add("back-section");
// }

function showSection (element) {
    // remove class active from all section
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }

    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");

}


// 
function updataNav(element) {
    
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}


// hire me = lest to work

// document.querySelector(".hire-me").addEventListener("click", function(){
//     const sectionIndex = this.getAttribute("data-section-index");
//     showSection(this);
//     updataNav(this);
//     removeBackSectionClass();
//     addBackSectionClass(sectionIndex);
// });

*/

/* ====== end aside navbar ====== */

/*
==============================================
==============================================
*/

/* ====== start portfolio ====== */


let switcherLis = document.querySelectorAll(".portfolio .filters .item");
let imgs = Array.from(document.querySelectorAll(".portfolio .cards .card"));

switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});

// remove active calss from all lis an add to current 
function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}

// manage imgs 
function manageImgs() {
    imgs.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.filter).forEach((el) => {
        el.style.display = "block";
    });
}

let linkWork = document.querySelectorAll(".portfolio .filters .item");
function activeWork() {
    linkWork.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
}
linkWork.forEach(l => l.addEventListener("click", activeWork));



/* ====== end portfolio ====== */

/*
==============================================
==============================================
*/

/* ====== end aside navbar ====== */

/*
==============================================
==============================================
*/






