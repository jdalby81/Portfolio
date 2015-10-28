//logo clicks
$('.header-logo').click(function(){
   /* $('.swiper-container').show();
    $('.prowork').hide();
    $('.welcomeText').show();
    location = "index.html";
    $('.aboutSection').hide();
    $('.contactSection').hide();
    $('.holderClass').addClass('contentBackground');
    $('.holderClass').removeClass('addOnContent');
    $('.seperator').show();
    //$('.content').show();*/
});

$('.innerLogo').click(function(){    
    /*$('.header').show();
    $('.seperator').show();
    $('.contentBackground').show();
    $('.workSection').hide();
    $('.swiper-container').show();
    $('.welcomeText').show();
    $('.aboutSection').hide();
    $('.contactSection').hide();
    $('.holderClass').addClass('contentBackground');
    $('.holderClass').removeClass('addOnContent');
    $('.content').show();*/
});

$('.backBtn').click(function(){
    $('.workContainerBody').hide();
    $('.workText').show();
    $('.pittsburghSkylineWork').show();
    $('.workSection').removeClass('paperBackground');
    $('.workDescription').html('');
    $('.workPortfolio').html('');
    $('.siteLaunch').html('');
    $('.techused').html('');
    $('.siteHighlights').html('');
    $('.workImage').html('');
    $('.prowork').hide();
    $('.welcomeText').show();
    $('.aboutSection').hide();
    $('.holderClass').addClass('contentBackground');
    $('.holderClass').removeClass('addOnContent');
    $('.content').show();
    $('.prowork').show();
    $('.seperator').show();
    $('.spaceing').show();
});
$('.aboutPageLogo').click(function(){
    /*$('.aboutSection').show();
    $('.workSection').hide();
    $('#welcomeSection').show();
    $('.workDescription').html('');
    $('.workPortfolio').html('');
    $('.siteLaunch').html('');
    $('.workPageLogo').html('');
    $('.techused').html('');
    $('.siteHighlights').html('');
    $('.workImage').html('');
    $('.prowork').hide();
    $('.welcomeText').show();
    $('.aboutSection').hide();
    $('.holderClass').addClass('contentBackground');
    $('.holderClass').removeClass('addOnContent');
    //$('.content').show();*/
    
});
$('.contactPageLogo').click(function(){
    /*$('.contactSection').hide(); 
    $('.aboutSection').show();
    $('.workSection').hide();
    $('#welcomeSection').show();
    $('.workDescription').html('');
    $('.workPortfolio').html('');
    $('.siteLaunch').html('');
    $('.workPageLogo').html('');
    $('.techused').html('');
    $('.siteHighlights').html('');
    $('.workImage').html('');
    $('.prowork').hide();
    $('.welcomeText').show();
    $('.aboutSection').hide();
    $('.holderClass').addClass('contentBackground');
    $('.holderClass').removeClass('addOnContent');
    //$('.content').show();*/
    
});
$('.resumePageLogo').click(function(){
    /*$('.resumeSection').hide();
    $('.contactSection').hide(); 
    $('.aboutSection').hide();
    $('.workSection').hide();
    $('#welcomeSection').show();
    $('.workDescription').html('');
    $('.workPortfolio').html('');
    $('.siteLaunch').html('');
    $('.workPageLogo').html('');
    $('.techused').html('');
    $('.siteHighlights').html('');
    $('.workImage').html('');
    $('.prowork').hide();
    $('.seperator').show();
    $('.welcomeText').show();
    $('.aboutSection').hide();
    $('.holderClass').addClass('contentBackground');
    $('.holderClass').removeClass('addOnContent');
    //$('.content').show();*/
    
});

//navigation About Hover effect
$('.about').hover(
    function (){
        $('.about').attr('src','');
        $('.about').attr('src','img/header/navigation/aboutText.png');
    },
    function (){
        $('.about').attr('src','img/header/navigation/aboutNewIcon.png');
    });

//navigation work Hover effect
$('.work').hover(
    function (){
        $('.work').attr('src','');
        $('.work').attr('src','img/header/navigation/workText.png');
    },
    function (){
        $('.work').attr('src','img/header/navigation/worktIcon.png');
    });

//navigation contact Hover effect
$('.contact').hover(
    function (){
        $('.contact').attr('src','');
        $('.contact').attr('src','img/header/navigation/contactText.png');
    },
    function (){
        $('.contact').attr('src','img/header/navigation/contactIcon.png');
    });

//navigation resume Hover effect
$('.resume').hover(
    function (){
        $('.resume').attr('src','');
        $('.resume').attr('src','img/header/navigation/resumeText.png');
    },
    function (){
        $('.resume').attr('src','img/header/navigation/resumeIcon.png');
    });


//homepage navigation about click
$('.about').click(function(){
    /*$('.workSection').hide();
    $('.aboutSection').show();
    $('#welcomeSection').hide();
    $('.contactSection').hide();
    $('.resumeSection').hide();
    //var $workLogo = $('');
    //$workLogo.appendTo('.workPageLogo');*/
});

//homepage navigation contact click
$('.contact').click(function(){
    /*$('.workSection').hide();
    $('.aboutSection').hide();
    $('#welcomeSection').hide();
    $('.contactSection').show();
    $('.resumeSection').hide();*/

});

//homepage navigation work section control
$('.work').click(function(){
    /*$('.content').hide();
    $('.welcomeText').hide();
    $('.aboutSection').hide();
    $('#welcomeSection').show();
    $('.contactSection').hide();
    $('.seperator').hide();
    $('#wrapper').toggleClass("");
    $('.holderClass').removeClass('contentBackground');
    $('.holderClass').addClass('addOnContent');
    $('.resumeSection').hide();*/
});
$('.resume').click(function(){
   /* $('.resumeSection').show();
    $('.welcomeText').hide();
    $('.prowork').hide();
    $('.aboutSection').hide();
    $('#welcomeSection').hide();
    $('.contactSection').hide();
    $('.seperator').hide();
    $('#wrapper').toggleClass("");
    $('.holderClass').removeClass('contentBackground');
    $('.holderClass').addClass('addOnContent');*/
});


//work page navigation workNavigation
$('#workNavigation').click(function(){
    /*$('.workSection').hide();
    $('#welcomeSection').show();
    $('.workDescription').html('');
    $('.workPortfolio').html('');
    $('.siteLaunch').html('');
    $('.workPageLogo').html('');
    $('.techused').html('');
    $('.siteHighlights').html('');
    $('.workImage').html('');
    $('.prowork').show();
    mySwiper.slideTo(0, 2, false);*/
});

//handling about page toolbox toggle

$('.tool').click(function(){
    $('.toolboxList').toggle();
});
//handling contact form
/*
Creating an HTML5 enhanced responsive-ready contact form, with custom javascript feature detection
www.toddmotto.com
*/
(function() {

	// Create input element for testing
	var inputs = document.createElement('input');
	
	// Create the supports object
	var supports = {};
	
	supports.autofocus   = 'autofocus' in inputs;
	supports.required    = 'required' in inputs;
	supports.placeholder = 'placeholder' in inputs;

	// Fallback for autofocus attribute
	if(!supports.autofocus) {
		
	}
	
	// Fallback for required attribute
	if(!supports.required) {
		
	}

	// Fallback for placeholder attribute
	if(!supports.placeholder) {
		
	}
	
	// Change text inside send button on submit
	/*var send = document.getElementById('contact-submit');
	if(send) {
		send.onclick = function () {
			this.innerHTML = '...Sending';
		}
	}*/

})();



   