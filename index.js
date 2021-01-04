const navbar = document.getElementById('navbar');

const changeNavBg = () => {
    if (window.scrollY >= 100) {
        navbar.classList.add('active_navbar');
    } else {
        navbar.classList.remove('active_navbar');
    }
}

window.addEventListener('scroll', changeNavBg);


const navbtn = document.getElementById('navbtn');
const navDrawer = document.getElementById('nav');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
// const a5 = document.getElementById('a5');
const a5 = document.getElementById('a6');
const a6 = document.getElementById('a7');

navbtn.addEventListener('click', () => {
    // nav.classList.toggle('navbar__drawer');
    navDrawer.classList.toggle('nav__none');
    navDrawer.classList.toggle('navbar__drawer__active');
})

a1.addEventListener('click', () => {
    navDrawer.classList.add('nav__none');
    navDrawer.classList.remove('navbar__drawer__active');
})

a2.addEventListener('click', () => {
    navDrawer.classList.add('nav__none');
    navDrawer.classList.remove('navbar__drawer__active');
})

a3.addEventListener('click', () => {
    navDrawer.classList.add('nav__none');
    navDrawer.classList.remove('navbar__drawer__active');
})

a4.addEventListener('click', () => {
    navDrawer.classList.add('nav__none');
    navDrawer.classList.remove('navbar__drawer__active');
})

a5.addEventListener('click', () => {
    navDrawer.classList.add('nav__none');
    navDrawer.classList.remove('navbar__drawer__active');
})

a6.addEventListener('click', () => {
    navDrawer.classList.add('nav__none');
    navDrawer.classList.remove('navbar__drawer__active');
})

a7.addEventListener('click', () => {
    navDrawer.classList.add('nav__none');
    navDrawer.classList.remove('navbar__drawer__active');
})


const question = document.getElementById('question');

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');
const link5 = document.getElementById('link5');
const link6 = document.getElementById('link6');
const link7 = document.getElementById('link7');
const ans1 = document.getElementById('ans1');
const ans2 = document.getElementById('ans2');
const ans3 = document.getElementById('ans3');
const ans4 = document.getElementById('ans4');

link1.addEventListener('click', () => {
    ans1.classList.toggle('answer__active')
})
link2.addEventListener('click', () => {
    ans2.classList.toggle('answer__active')
})
link3.addEventListener('click', () => {
    ans3.classList.toggle('answer__active')
})
link4.addEventListener('click', () => {
    ans4.classList.toggle('answer__active')
})
link5.addEventListener('click', () => {
    ans5.classList.toggle('answer__active')
})
link6.addEventListener('click', () => {
    ans6.classList.toggle('answer__active')
})
link7.addEventListener('click', () => {
    ans7.classList.toggle('answer__active')
})