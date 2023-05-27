  $( document ).ready(function() {
    $('.first-screen-slider').slick({
      dots: true,
      speed: 1000,

      appendArrows: ".container-arrows",
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false
          }
        },
      ]
    }); 
  });