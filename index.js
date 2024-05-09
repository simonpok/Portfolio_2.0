document.addEventListener("DOMContentLoaded", function(){
      
    const worklink = document.querySelector('a[href="#works"]');

    worklink.addEventListener("click",function(event){
        event.preventDefault();

        const targetSection = document.getElementById("works-section");
        targetSection.scrollIntoView({ behavior: 'smooth'});
    });
    


});