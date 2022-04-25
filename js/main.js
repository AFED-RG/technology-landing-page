function navShow() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuList = document.querySelector('.menu-list');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active')
        menuList.classList.toggle('active')
    })


    window.addEventListener('resize', () => {
        if (window.innerWidth > 762) {
            if (menuList.className.includes('active')) {
                hamburgerMenu.classList.remove('active')
                menuList.classList.remove('active')
            }
        }
    })
}
navShow()