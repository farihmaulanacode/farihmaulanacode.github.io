// nav fix

window.onscroll = function(){
    const heder = document.querySelector(`header`);
    const fix = heder.offsetTop;

    if (window.pageYOffset > fix) {
        heder.classList.add(`nav`);
    } else {
        heder.classList.remove(`nav`);
    }
};
// humberger

const humb = document.querySelector(`#humberger`);
const navM = document.querySelector(`#nav-menu`) 

humb.addEventListener(`click`, () => {
    humb.classList.toggle(`humberger-active`);
    navM.classList.toggle(`hidden`)

});
