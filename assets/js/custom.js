(function ($) {
	"use strict";
	jQuery(document).ready(function(){
        // for main slider
        $(".main-slider").owlCarousel({
            nav : true, // Show next and prev buttons
            items : 1, 
            autoplay: false,
            autoplayTimeout: 5000,
            loop: true,            
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
        });
        
        // for author slider
        $(".author-slider").owlCarousel({
            nav : true, // Show next and prev buttons
            items : 1, 
            dot: false,
            autoplay: false,
            autoplayTimeout: 5000,
            loop: true,            
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
        });
        // for testimonial slider
        $(".testimonial-slider").owlCarousel({
            nav : true, // Show next and prev buttons
            items : 1, 
            dot: false,
            autoplay: false,
            autoplayTimeout: 5000,
            loop: true,            
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
        });
    });
    
    
    
    
    
    
	jQuery(window).load(function(){
        
	});
    
}(jQuery));
