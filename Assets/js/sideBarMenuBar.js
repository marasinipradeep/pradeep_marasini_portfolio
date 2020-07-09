
// $(document).ready(function(){

//     $("#navAboutMe").click(function() {
//         $('html,body').animate({
//             scrollTop: $("#aboutme").offset().top},
//             'slow');
//             // $("#navAboutMe").addClass("active")
//             // $("#navResume").removeClass("active")
//             // $("#navWorks").removeClass("active")
//             // $("#navContact").removeClass("active")
           
//     });

//     $("#navResume").click(function() {
//         $('html,body').animate({
//             scrollTop: $("#resume").offset().top},
//             "slow");
//             // $("#navAboutMe").removeClass("active")
//             // $("#navResume").addClass("active")
//             // $("#navWorks").removeClass("active")
//             // $("#navContact").removeClass("active")
//     });

//     $("#navWorks").click(function() {
//         $('html,body').animate({
//             scrollTop: $("#works").offset().top},
//             'slow');

//             // $("#navAboutMe").removeClass("active")
//             // $("#navResume").removeClass("active")
//             // $("#navWorks").addClass("active")
//             // $("#navContact").removeClass("active")
//     });

//     $("#navContact").click(function() {
//         $('html,body').animate({
//             scrollTop: $("#contact").offset().top},
//             'slow');

//             // $("#navAboutMe").removeClass("active")
//             // $("#navResume").removeClass("active")
//             // $("#navWorks").removeClass("active")
//             // $("#navContact").addClass("active")
//     });

//     $("#contentContactMe").click(function() {
//         $('html,body').animate({
//             scrollTop: $("#contact").offset().top},
//             'slow');
//     });

//     // $(window).scroll(function() {
//     //     var position = $(this).scrollTop();
    
//     //     $('.sidebar').each(function() {
//     //         var target = $(this).offset().top;
//     //         var id = $(this).attr('id');
    
//     //         if (position >= target) {
//     //             $('#navigation > ul > li > a').attr('href', id).addClass("active");
//     //         }
//     //     });
//     // });




// });

$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 0});   
  
    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });
  });