const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    
    burger.addEventListener('click', () => {
        // toggle navbar
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
    
}

navSlide();