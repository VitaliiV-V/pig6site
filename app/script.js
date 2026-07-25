/* ==========================================
   Pig-6 Website Scripts
   ========================================== */


// Reveal animations on scroll

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);



revealElements.forEach(element => {

    revealObserver.observe(element);

});









// Navbar blur effect

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {


    if (window.scrollY > 50) {


        navbar.style.background =
            "rgba(0,0,0,0.75)";


    } else {


        navbar.style.background =
            "rgba(0,0,0,0.45)";


    }


});









// Mouse glow effect


const glow = document.querySelector(".background-glow");


document.addEventListener("mousemove", (event) => {


    const x = event.clientX;
    const y = event.clientY;



    glow.style.transform =

        `
    translate(
        ${x / 50}px,
        ${y / 50}px
    )
    translateX(-50%)
    `;


});









// Smooth anchor scrolling


document.querySelectorAll('a[href^="#"]').forEach(link => {


    link.addEventListener("click", function (e) {


        const target =
            document.querySelector(
                this.getAttribute("href")
            );


        if (target) {


            e.preventDefault();


            target.scrollIntoView({

                behavior: "smooth"

            });


        }


    });


});









// Add small parallax effect to cards


const cards =
    document.querySelectorAll(
        ".feature-card, .big-card, .deploy-card"
    );



window.addEventListener("mousemove", (e) => {


    const x =
        (window.innerWidth / 2 - e.clientX) / 100;


    const y =
        (window.innerHeight / 2 - e.clientY) / 100;



    cards.forEach(card => {


        card.style.transform =

            `
        translateY(0)
        rotateX(${y}deg)
        rotateY(${x}deg)
        `;


    });


});





// Reset cards when mouse leaves page

document.addEventListener("mouseleave", () => {


    cards.forEach(card => {


        card.style.transform =
            "";

    });


});









// Dynamic year in footer


const year =
    document.querySelector(".copyright");


if (year) {


    year.innerHTML =

        `
    © ${new Date().getFullYear()}
    Pig-6. All rights reserved.
    `;


}









// Console branding


console.log(
    `
🐷 Pig-6

Next-generation Telegram Protection System

GitHub:
https://github.com/VitaliiV-V/Pig6bot

Created by Hammam Inc.
`
);

// Hero 3D movement


const heroCard =
    document.querySelector(".glass-card");


document.addEventListener(
    "mousemove",
    (e) => {


        if (!heroCard)
            return;


        const x =
            (e.clientX / window.innerWidth - 0.5)
            * 15;


        const y =
            (e.clientY / window.innerHeight - 0.5)
            * 15;



        heroCard.style.transform =

            `
perspective(1200px)
rotateX(${-y}deg)
rotateY(${x}deg)
`;



    });



document.addEventListener(
    "mouseleave",
    () => {


        if (heroCard)

            heroCard.style.transform =
                "";


    });

// Announcement close


const announcement =
    document.getElementById(
        "announcement"
    );


const closeAnnouncement =
    document.getElementById(
        "announcementClose"
    );



if (closeAnnouncement) {


    closeAnnouncement.addEventListener(
        "click",
        () => {


            announcement.classList.add(
                "hide"
            );


            setTimeout(() => {

                announcement.remove();

            }, 500);



        });


}