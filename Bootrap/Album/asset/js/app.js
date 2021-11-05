var showNavbar = false;

function toggleNavbar() {
    var navTopElement = document.querySelector('.nav-top');
    if (showNavbar == false) {
        navTopElement.classList.add('show');
        showNavbar = true;
    }
    else {
        navTopElement.classList.remove('show');
        showNavbar = false;
    }
}