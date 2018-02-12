$('.slick').slick({
    dots: true,
    infinite: true,
    arrow:false,
    speed: 1000,
    slidesToShow: 3,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        } ]
});

$('.slick2').slick({
    dots: true,
    infinite: true,
    arrow:false,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        } ]
});

