document.getElementById("player").onclick = function () { myFunction() };

function myFunction() {
    document.getElementById("iframe").style.display = "block";
    document.getElementById("img").style.display = "none";
    document.getElementById("player").style.display = "none";
}

$('.responsive-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

var nav = document.getElementsByClassName("navbar")[0]
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.style.background = "white"
    } else {
        navbar.style.background = "rgba(255, 0, 0, 0.4)"
    }
})

$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    scroll: false
});