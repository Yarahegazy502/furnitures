
// $(document).ready(function(){
// $(".owl-carousel").owlCarousel({
//     loop:true,
     
//     margin:10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:1,
//             nav:false
//         },
//         1000:{
//             items:1,
//             nav:true,
//             loop:false
//         }
//     }
    
// });
// });
 
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
        
    });
    });

    // window.onload=function(){
    //     $('.slider').slick({
    //     autoplay:false,
    //     autoplaySpeed:1000,
    //     arrows:true,
    //     prevArrow:'<button type="button" class="slick-prev  "></button>',
    //     nextArrow:'<button type="button" class="slick-next  "></button>',
    //     centerMode:true,
    //     slidesToShow:1,
    //     slidesToScroll:1
    //     });
    //   };
      

       //acrsoul

    $('.slickslider1').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });