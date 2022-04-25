function navShow() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuList = document.querySelector('.menu-list');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active')
        menuList.classList.toggle('active')
    })

    document.querySelectorAll('.menu-list').forEach(e => e.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active')
        menuList.classList.remove('active')
    }))

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
