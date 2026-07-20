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
   Scroll Animation
=========================================== */

.reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}


/* ===========================================
   Project Gallery
=========================================== */



/* ===========================================
   Certificate Viewer
=========================================== */



/* ===========================================
   Back To Top
=========================================== */
