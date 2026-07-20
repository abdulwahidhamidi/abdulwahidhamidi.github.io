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



/* ===========================================
   Scroll Animation
=========================================== */



/* ===========================================
   Project Gallery
=========================================== */



/* ===========================================
   Certificate Viewer
=========================================== */



/* ===========================================
   Back To Top
=========================================== */
