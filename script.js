var menuIcon = document.querySelector('#menu-icon')
var navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}

var sections = document.querySelectorAll('section')
var navLinks = document.querySelectorAll('header nav a')


window.onscroll = () => {
    sections.forEach(sec => {
        var top = window.scrollY;
        var offset = sec.offsetTop - 150;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    var header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active')

};


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'left' });
ScrollReveal().reveal('  .contact form', { origin: 'top' });
ScrollReveal().reveal('.home-contact h1', { origin: 'left' });
ScrollReveal().reveal('.home-img,.home-contact p,.portfolio-box, .about-content', { origin: 'left' });
ScrollReveal().reveal('.skill-box,.home-img', { origin: 'top' });

const typed = new Typed('.multiple-text',{
     strings: ['Full Stack Developer','Frontend Developer','Backend Developer'],
     typeSpeed: 70,
     backSpeed: 70,
     backDelay: 1200,
     loop: true,
})