$(document).ready(function(){
   $(window).scroll(function(){
       if(this.scrollY > 20){
           $('.navbar').addClass("sticky");
       }else{
           $('.navbar').removeClass("sticky");
       } 
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Designer and", "Frontend", "Web Developer"],
        typespeed: 40,
        backspeed: 10,
        loop: true
    });
     // toggle menu/navbar script
   $('.menu-btn').click(function(){
       $('.navbar .menu').toggleClass("active");
       $('.menu-btn i').toggleClass("active");
   });
});