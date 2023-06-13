$(document).ready(function() {
    $('.first-screen-slider').slick({
        dots: true,
        speed: 1000,
        appendArrows: ".container-arrows",
        responsive: [{
                breakpoint: 991,
                settings: {
                    arrows: false,
                    fade: true,
                }
            },

        ]
    });

    mobileOnlySlider(".advantages-slider", true, false, 991);

    function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
        var slider = $($slidername);
        var settings = {
            mobileFirst: true,
            dots: $dots,
            speed: 1000,
            arrows: false,
            fade: true,
            responsive: [{
                breakpoint: $breakpoint,
                settings: "unslick"
                
            }]
        };

        

        $(window).on("resize", function() {
            if ($(window).width() > $breakpoint) {
                return;
            }
            if (!slider.hasClass("slick-initialized")) {
                return slider.slick(settings);
            }
        });
    } // Mobile Only Slider


    $('.slider-template').slick({
        dots: false,
        speed: 700,
        arrows: true,
        
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                   
                    arrows: true,
                    
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    
                    
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                    fade: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // $('.navbar-toggler').on('click', function(){
    //   $('.navbar').toggleClass('margin-bottom')
    // })


});







document.getElementById('fileInput').onchange = function() {
    //short name
    document.getElementById('file-name').innerHTML = this.files[0].name;

    //long name
    // document.getElementById('file-name').innerHTML = this.value;
};



function checkboxContainerPadding() {
    const checkButton = document.querySelectorAll('.check-button');
    checkButton.forEach(item => {
        item.closest('[class*="col"]').classList.add('padding-top');
    });
};

if (document.querySelector('.calculation-form')) {
    checkboxContainerPadding()
} else {
    null
}