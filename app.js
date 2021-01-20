const newSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 0.5}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}
newSlide();

var progressbar = document.getElementById('progress');
var percent = document.getElementById('percent');

var totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    var progress = (window.pageYOffset / totalHeight) * 100;
    progressbar.style.height = progress + "%";
    percent.innerHTML = "Page Scrolled " + Math.round(progress) + "%"
}