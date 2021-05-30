const navLinks = document.querySelectorAll('.nav__list-item');
const item = [document.querySelector('.about'), document.querySelector('.portfolio'), document.querySelector('.blog'), document.querySelector('.contact')]

for (let i = 0; i <= navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        for (el of item) {
            el.classList.remove('active')
        }

        item[i].classList.add('active')
        for (el of navLinks) {
            el.classList.remove('active')
        }
        navLinks[i].classList.add('active')

    })
}