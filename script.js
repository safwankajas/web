$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.navabar').addClass("sticky");
            $('.home').addClass("sticky");
        }else{
            $('.navabar').removeClass("sticky");
            $('.home').removeClass("sticky");

        }
    });

   $('.menu-btn').click(function(){
         $('.navabar .menu').toggleClass("active");
         $('.menu-btn i').toggleClass("active");
    });
    // typing ----------aninimation
    
    var typed = new Typed(".typ",{
        strings: ["Developer","Editor","Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    });


    $('.carousel').owlCarousel({

        margin:20,
        loop: true,
        autoplay:true,
        autoplayTimeout: 2300,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav: false
            },
             720:{
                items:2,
                nav: false
            },
            1000:{
                items:3,
                nav: false
            }

        }


    });
});