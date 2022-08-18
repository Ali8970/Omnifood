let btn = document.querySelector(".icon-mobile-nav");
let menu = document.querySelector(".header-nav");
let openmenu = document.querySelector(".open-menu");
let closemenu = document.querySelector(".close-menu");

// btn.addEventListener("click", (e) => {
//     menu.classList.toggle("open");
//     e.target.classList.toggle("open");
// })

openmenu.addEventListener("click", (e) => {
    menu.classList.add("open");
    e.target.classList.add("open");
})

closemenu.addEventListener("click", (e) => {
    menu.classList.remove("open");
    openmenu.classList.remove("open");
})


/* smooth scroll in safari*/
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        if (href !== "#" && href.startsWith("#")) {
            const section = document.querySelector(href);
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});

