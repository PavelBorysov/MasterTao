  $( document ).ready(function() {
    $('.first-screen-slider').slick({
      dots: true,
      speed: 1000,

      appendArrows: ".container-arrows",
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            fade: true,
          }
        },
      ]
    }); 
  });

  function checkboxContainerPadding() {
    const checkButton = document.querySelectorAll('.check-button');

    checkButton.forEach(item => {
      item.closest('[class*="col"]').classList.add('padding-top');
    })
  }
  
  if (document.querySelector('.calculation-form')) {
    checkboxContainerPadding()
  } else {
    null
  }
