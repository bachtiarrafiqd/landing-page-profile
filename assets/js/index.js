let slider = tns({
    container: ".my-slider",
    slideBy: "1",
    speed: 500,
    mouseDrag: true,
    swipeAngle: false,
    nav: false,
    autoplay: true,
    controls: false,
    autoplayButtonOutput: false,
    responsive: {
      1500: {
        items: 3,
        gutter: 20,
      },
      878: {
        items: 2,
        gutter: 20,
      },
      768: {
        items: 1,
        gutter: 20,
      },
    },
  });

$(document).ready(function () {
    $('#menu').click(function () { 
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    }); 
    $(window).on('scroll load', function () { 
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
    
  // $('a[href*="#"]').on('click', function (e) {
  //   e.preventDefault();
  //   $('html,body').animate({
  //     scrollTop: $($(this).attr('href')).offset().top,
    
  //   }),
  //     1000,
  //     'linear'
  //   })
});

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
  document.body.classList.toggle('light');
});