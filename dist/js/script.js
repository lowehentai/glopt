$(document).ready(function () {
    $('.review__inner').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        prevArrow: '<button type = "button" class = "slick-prev"><img src="img/arrows/ArrowLeft.png" alt="LeftArrow"><button>',
        nextArrow: '<button type = "button" class = "slick-next"><img src="img/arrows/ArrowRight.png" alt="RightArrow"><button>',
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 720,
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
    let x = 0;
    document.getElementById('burger').onclick = function () {
        if (x == 0) {
            document.getElementById('burger').classList.add('burger-active');
            document.getElementById('burgermenu').classList.remove('burgermenu-hidden');

            x++;
        } else if (x == 1) {
            document.getElementById('burger').classList.remove('burger-active');
            document.getElementById('burgermenu').classList.add('burgermenu-hidden');
            x = 0;
        }
    };
});