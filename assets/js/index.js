// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        }
    });
});
/*
// protfolio filters
$(window).on("load", function() {
    $(".filters a").click(function() {
        $(".filters .active").removeClass("active");
        $(this).addClass("active");
    })
})*/

window.onload = function() {
    let filters_options = document.getElementsByClassName("filters-option");
    for (let i = 0; i < filters_options.length; i++) {
        filters_options[i].onclick = function() {
            let active_filters_options = document.getElementsByClassName("filters-option");
            for (let j = 0; j < active_filters_options.length; j++) {
                active_filters_options[j].classList.remove("active");
            }
            this.classList.add("active");

            let git = document.getElementsByClassName("git");
            for (let j = 0; j < git.length; j++) {
                git[j].classList.add("inactive");
            }
            let minecraft = document.getElementsByClassName("minecraft");
            for (let j = 0; j < minecraft.length; j++) {
                minecraft[j].classList.add("inactive");
            }
            let communites = document.getElementsByClassName("communities");
            for (let j = 0; j < communites.length; j++) {
                communites[j].classList.add("inactive");
            }

            let event = document.getElementsByClassName(this.dataset.filter);
            for (let j = 0; j < event.length; j++) {
                event[j].classList.remove("inactive");
            }
        }
    }
};