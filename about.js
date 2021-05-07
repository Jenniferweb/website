const logo = document.querySelector(".logo");
const hamburger = document.querySelector(".hamburger");
const aboutSection = document.querySelector(".aboutSection")
const resume = document.querySelector(".resume")

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li")

    //Toggle Nav
    let menuOpen = false;
    hamburger.addEventListener('click', () => {
        if (!menuOpen) {
            hamburger.classList.add('open');
            menuOpen = true;
        }
        else {
            hamburger.classList.remove('open');
            menuOpen = false;
        }

        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    });
}

navSlide();

const t1 = new TimelineMax();

t1.fromTo(
    aboutSection,
    1.5,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
)

.fromTo(
    resume,
    1,
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0 },
    "-=1"
)

.fromTo(
        logo,
        1,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        "-=1"
)
.fromTo(
        hamburger,
        1,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        "-=1"
)






