
///////////////////////////////////////////////////////////////////////////
// Fix for # href
var aWithHref = document.querySelectorAll('a[href*="#"]');
aWithHref.forEach(function (el) {
    el.addEventListener("click", function (e) {
        e.preventDefault();
    })
});
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// Go Back
var goBackButton = document.querySelectorAll(".goBack");
goBackButton.forEach(function (el) {
    el.addEventListener("click", function () {
        window.history.go(-1);
    })
})
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// Loader
document.addEventListener('DOMContentLoaded', function () {
    var loader = document.getElementById("loading");
    setTimeout(() => {
        var searchboxOpacity = 1;
        var fadeAnimation = setInterval(() => {
            if (searchboxOpacity <= 0.05) {
                clearInterval(fadeAnimation);
                loader.style.opacity = "0";
                loader.style.display = "none";
            }
            loader.style.opacity = searchboxOpacity;
            loader.style.filter = "alpha(opacity=" + searchboxOpacity * 100 + ")";
            searchboxOpacity = searchboxOpacity - searchboxOpacity * 0.5;
        }, 30);
    }, 500);
})
///////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////
// Carousel
// Splide Carousel
document.addEventListener('DOMContentLoaded', function () {

    // Single Carousel
    document.querySelectorAll('.carousel-single').forEach(carousel => new Splide(carousel, {
        perPage: 1,
        rewind: true,
        type: "loop",
        gap: 20,
        padding: 40,
        arrows: false,
        pagination: false
    }).mount());

    // Multiple Carousel
    document.querySelectorAll('.carousel-multiple').forEach(carousel => new Splide(carousel, {
        perPage: 2,
        rewind: true,
        type: "loop",
        gap: 20,
        padding: 20,
        arrows: false,
        pagination: false
    }).mount());

    // Small Carousel
    document.querySelectorAll('.carousel-small').forEach(carousel => new Splide(carousel, {
        perPage: 4,
        rewind: false,
        type: "loop",
        gap: 20,
        padding: 20,
        arrows: false,
        pagination: false
    }).mount());

    // Slider Carousel
    document.querySelectorAll('.carousel-slider').forEach(carousel => new Splide(carousel, {
        perPage: 1,
        rewind: false,
        type: "loop",
        gap: 16,
        padding: 16,
        arrows: false,
        pagination: true
    }).mount());

    // Stories Carousel
    document.querySelectorAll('.story-block').forEach(carousel => new Splide(carousel, {
        perPage: 16,
        rewind: false,
        type: "slide",
        gap: 16,
        padding: 16,
        arrows: false,
        pagination: false,
        breakpoints: {
            500: {
                perPage: 4
            },
            768: {
                perPage: 7
            },
            1200: {
                perPage: 11
            }
        }
    }).mount());
});

///////////////////////////////////////////////////////////////////////////
// Sidebar 
var toggleSidebar = document.querySelectorAll(".toggleSidebar");
var body = document.querySelector("body");
var sidebar = document.querySelector(".sidebarWrapper .sidebar");
var sidebarWrapper = document.querySelector(".sidebarWrapper")
toggleSidebar.forEach(function(el){
    el.addEventListener("click", function(){
        sidebarWrapper.classList.toggle("is-active")
        if(body.classList.contains("sidebarActive")){
            body.classList.remove("sidebarActive")
        }
        else{
            body.classList.add("sidebarActive")
        }
        if(sidebar.classList.contains("is-active")){
            sidebar.classList.remove("is-active")
            sidebar.classList.add("is-passive")
        }
        else{
            sidebar.classList.add("is-active")
        }
    })
})
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// Searchbox
var searchboxToggle = document.querySelectorAll('.toggleSearchbox');
var searchbox = document.getElementById("searchBox");
searchboxToggle.forEach(function (el) {
    el.addEventListener("click", function (e) {
        if(searchbox.classList.contains("search-active")){
            searchbox.classList.remove("search-active");
        }
        else{
            searchbox.classList.add("search-active");
        }
    })
});
///////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////
// Countdown
function countdownTimer(time) {
    var end = time;
    end = new Date(end).getTime();
    var d, h, m, s;
    setInterval(() => {
        let now = new Date().getTime();
        let r = parseInt((end - now) / 1000);
        if (r >= 0) {
            // نظری بنویسید...
            d = parseInt(r / 86400);
            r = (r % 86400);
            // hours
            h = parseInt(r / 3600);
            r = (r % 3600);
            // minutes
            m = parseInt(r / 60);
            r = (r % 60);
            // seconds
            s = parseInt(r);
            d = parseInt(d, 10);
            h = h < 10 ? "0" + h : h;
            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;
            document.getElementById("countDown").innerHTML =
                "<div>" + d + "<span>روز</span></div>"
                +
                "<div>" + h + "<span>ساعت</span></div>"
                +
                "<div>" + m + "<span>دقیقه</span></div>"
                +
                "<div>" + s + "<span>ثانیه</span></div>"
        } else {
            document.getElementById("countDown").innerHTML = "<p class='alert alert-outline-warning'>تایمر به اتمام رسیده است.</p>"
        }
    }, 1000);
}

///////////////////////////////////////////////////////////////////////////