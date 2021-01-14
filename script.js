document.addEventListener('DOMContentLoaded', function() {

    const navHeight = 56;

    /* Fixed header */
    let header = document.getElementById('#header');
    let intro = document.getElementById('#intro');
    let introH = intro.offsetHeight;
    let scrollPos = window.pageYOffset;

    function checkHeader() {
        introH = intro.offsetHeight;
        scrollPos = this.pageYOffset + navHeight;

        if (scrollPos > introH) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    };

    window.addEventListener("scroll", checkHeader);
    window.addEventListener("load", checkHeader);
    window.addEventListener("resize", checkHeader);


    /* Smooth scroll */
    /* Tap to 'link' - scroll to 'elem' */

    let nav = document.getElementById('#nav');
    let navLinks = document.querySelectorAll('.linkJS');

    navLinks.forEach(onLinksClick);
    function onLinksClick(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            let currLink = link;
            let elementId = currLink.getAttribute("data-scroll");
            let elem = document.getElementById(elementId);

            let margin = getComputedStyle(elem).marginTop;

            console.log(margin);
            let elementOffset = elem.getBoundingClientRect().top - navHeight+1 - parseInt(margin, 10);

            window.scrollBy({
                top: elementOffset,
                behavior: 'smooth'
            });

            nav.classList.remove('show');
        });
    };

    /* NavToggle */

    let navToggle = document.getElementById('#navToggle');

    navToggle.addEventListener('click', function(event) {
        event.preventDefault();

        nav.classList.toggle('show');
    });

}, false);


