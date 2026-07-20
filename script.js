/* ===========================================
   Abdul Wahid Hamidi Portfolio
   JavaScript
=========================================== */


/* ===========================================
   Smooth Scroll
=========================================== */

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:'smooth'

            });

        }

    });

});

/* ===========================================
   Active Navigation
=========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/* ===========================================
   Scroll Reveal Animation
=========================================== */

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    const windowHeight = window.innerHeight;

    reveals.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < windowHeight - 100){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


/* ===========================================
   Project Gallery
=========================================== */



/* ===========================================
   Certificate Viewer
=========================================== */
function openCertificate(imageSrc) {
    window.open(imageSrc, "_blank");
}


/* ===========================================
   Back To Top
=========================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backToTop.style.display = "flex";

    }else{

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ===========================================
   Certificate Viewer
=========================================== */

const certificateModal = document.getElementById("certificateModal");
const certificateImage = document.getElementById("certificateImage");
const closeModal = document.querySelector(".close-modal");

function openCertificate(imageSrc){

    certificateImage.src = imageSrc;
    certificateModal.style.display = "flex";

}

closeModal.onclick = function(){

    certificateModal.style.display = "none";

}

certificateModal.onclick = function(e){

    if(e.target === certificateModal){

        certificateModal.style.display = "none";

    }

}

certificateImage.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});
certificateImage.setAttribute("draggable", "false");
