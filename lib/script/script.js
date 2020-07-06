$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();


    $(window).scroll(function(){
        if(window.scrollY > 60){
            $('.fixed').css({top: '0rem'})
        }
        else{
            $('.fixed').css({top: '8rem'})
        }
    })

    // ================= OWL CAROUSEL LIBRARY ================= /////////
    // PROJECTS CAROUSEL
    $(".projects-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive : {
          0 : {
            items : 1
          },
          600 : {
            items : 2
          },
          1000 : {
            items : 3
          }
        },
        margin: 4,
        nav : true,
        navText: ["<span class='carousel-nav-left'><i class='fa fa-chevron-left grey-text text-lighten-2'></i></span>","<span class='carousel-nav-right'><i class='fa fa-chevron-right grey-text text-lighten-2'></i></span>"],
        autoplayTimeout: 3000,
        autoplayHoverPause:true
      });

    //   HEADER CAROUSEL
      $('.header-carousel').owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items : 1,
        nav : true,
        navText: ["<span class='carousel-nav-left'><i class='fa fa-chevron-left hide-on-med-and-down grey-text text-darken-2'></i></span>","<span class='carousel-nav-right'><i class='fa fa-chevron-right grey-text hide-on-med-and-down text-darken-2'></i></span>"],
        autoplayTimeout: 4000,
        autoplayHoverPause:true
      })
    
});

