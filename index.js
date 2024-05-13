document.addEventListener("DOMContentLoaded", function(){
      
    const worklink = document.querySelector('a[href="#works"]');
    const lablink = document.querySelector('a[href="#lab"]');
    const aboutlink = document.querySelector('a[href="#about"]');
    const contactlink = document.querySelector('a[href="#contact"]');
    const introlink = document.querySelector('a[href="#start"]');
    const navbar = document.querySelector('.navigation-bar');
    let lastScrollTop = 0;
    // let isHoveringTop = false;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.classList.add('hidden');
        } else {
            // Scrolling up or at the top
            navbar.classList.remove('hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });

    // window.addEventListener('mousemove', function(event) {
    //     const y = event.clientY;

    //     if (y <= 20) {
    //         isHoveringTop = true;
    //     } else {
    //         isHoveringTop = false;
    //     }

    //     if (isHoveringTop && lastScrollTop <= 0) {
    //         navbar.classList.remove('hidden');
    //     }
    // });


    
    worklink.addEventListener("click",function(event){
        event.preventDefault();

        const targetSection = document.getElementById("works-section");
        targetSection.scrollIntoView({ behavior: 'smooth'});
    });
    
    lablink.addEventListener("click",function(event){
        event.preventDefault();

        const targetSection = document.getElementById("lab-section");
        targetSection.scrollIntoView({ behavior: 'smooth'});
    });

    aboutlink.addEventListener("click",function(event){
        event.preventDefault();

        const targetSection = document.getElementById("about-section");
        targetSection.scrollIntoView({ behavior: 'smooth'});
    });

    contactlink.addEventListener("click",function(event){
        event.preventDefault();

        const targetSection = document.getElementById("contact-section");
        targetSection.scrollIntoView({ behavior: 'smooth'});
    });

    introlink.addEventListener("click",function(event){
        event.preventDefault();

        const targetSection = document.getElementById("intro-section");
        targetSection.scrollIntoView({ behavior: 'smooth'});
    });

    


});