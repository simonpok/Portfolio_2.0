document.addEventListener("DOMContentLoaded", function(){
      
    const worklink = document.querySelector('a[href="#works"]');
    const lablink = document.querySelector('a[href="#lab"]');
    const aboutlink = document.querySelector('a[href="#about"]');
    const contactlink = document.querySelector('a[href="#contact"]');
    const introlink = document.querySelector('a[href="#start"]');

    
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