function myFunction(){
    var list = document.getElementById("list");
    if(list.style.display === "flex"){
        list.style.display = "none";
    }else{
        list.style.display = "flex";
    }
}

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:2
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
    });
  });

