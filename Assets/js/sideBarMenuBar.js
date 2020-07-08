
$(document).ready(function(){

    $("#navAboutMe").click(function() {
        $('html,body').animate({
            scrollTop: $("#aboutme").offset().top},
            'slow');
    });

    $("#navResume").click(function() {
        $('html,body').animate({
            scrollTop: $("#resume").offset().top},
            "slow");
    });

    $("#navWorks").click(function() {
        $('html,body').animate({
            scrollTop: $("#works").offset().top},
            'slow');
    });

    $("#navContact").click(function() {
        $('html,body').animate({
            scrollTop: $("#contact").offset().top},
            'slow');
    });

});
