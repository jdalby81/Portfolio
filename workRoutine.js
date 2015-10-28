function buildWork(){
    $.each(workObj,function(key,val) {
        //console.log(workObj);
        var $levelOne = $('<li>'+val['title']+'</li>');
        $levelOne.appendTo('.proWork');
        
         //var $levelTwo = $('<div class="swiper-slide"><img src="'+val['homeRotator']+'" /></div>');
        //$levelTwo.appendTo('.swiper-wrapper');
        
        //var $slides = $('');
            $levelOne.click(function(){
                //alert("i am clicked");
                $('.workSection').show();
                $('#welcomeSection').hide();
                $('.workContainer').show();
                $('.prowork').hide();
                $('.pittsburghSkylineWork').hide();
                $('.workSection').addClass('paperBackground');
                $('.workText').hide();
                $('.workContainerBody').show();
                $('.spaceing').hide();
        //var $workLogo = $('<img src="img/header/logo/james-fill.jpg" class="logoInner"/>');
        //$workLogo.appendTo('.workPageLogo');
            
        var $workImage = $('<a href="'+val['siteAddress']+'" target="_blank"><img src="'+val['workImage']+'"/></a>');
        $workImage.appendTo('.workImage');
        
        var $workTitle = $('<h1 class="workTitle">'+val['title']+'</h1>');
        $workTitle.appendTo('.workPortfolio');
                
        var $workDescription = $('<p class="workDesc">'+val['workDescription']+'</p>');
        $workDescription.appendTo('.workDescription');
        
        var $workLeftColumn = $('<div class="techContainer"><h2 class="techTitle">Technologies used:</h2><ul class="techused"></ul></div>');
        $workLeftColumn.appendTo('.workDescription');
        
        var $workRightColumn = $('<div class="highlightContainer"><h2 class="highlightsTitle">Site Highlights:</h2><ul class="siteHighlights"></ul></div>');
        $workRightColumn.appendTo('.workDescription');
        
        var $siteLaunch = $('<div class="siteLaunch"></div>');
        $siteLaunch.appendTo('.workDescription');
            
        var $siteLink = $('<p class="launch"><a href="'+val['siteAddress']+'" target="_blank">Launch</a></p>');
        $siteLink.appendTo('.siteLaunch');
                
                $.each(val['techUsed'],function(index,subs) {
                var $techUsed = $('<li>'+subs['title']+'</li>');
                $techUsed.appendTo('.techused'); 
                });//tech used loop
            
            $.each(val['highlights'],function(index,subs) {
                    var $siteHighlights = $('<li>'+subs['title']+'</li>');
                    $siteHighlights.appendTo('.siteHighlights');
                });//highlights loop
            
        
           /* $workLogo.click(function(){
                $('.workSection').hide();
                $('#welcomeSection').show();
                $('.workDescription').html('');
                $('.workPortfolio').html('');
                $('.siteLaunch').html('');
                $('.workPageLogo').html('');
                $('.techused').html('');
                $('.siteHighlights').html('');
                $('.workImage').html('');
            });*/
        });//end level one loop
        
    });//workObj loop   
};//end

        
//===================//
//===OLD FUNCTIONS===//
//===================//
/*function perryman(){
    $('.workSection').show();
    $('#welcomeSection').hide();
    
    var $workLogo = $('<img src="img/header/logo/james-fill.jpg" class="logoInner"/>');
        $workLogo.appendTo('.workPageLogo');
    
    var $workImage = $('<img src="'+workObj[0]['workImage']+'"/>');
        $workImage.appendTo('.workImage');
    
    var $workTitle = $('<h1 class="workTitle">'+workObj[0]['title']+'</h1>');
        $workTitle.appendTo('.workPortfolio');
    
    var $workDescription = $('<p class="workDesc">'+workObj[0]['workDescription']+'</p>');
        $workDescription.appendTo('.workDescription');
            
        var $siteLink = $('<h1 class="launch"><a href="'+workObj[0]['siteAddress']+'" target="_blank">Launch Site</a></h1>');
        $siteLink.appendTo('.siteLaunch');
    //console.log(title[0].title);
    
    var tech = workObj[0].techUsed;    
    for (var i in tech){
        //console.log(tech[i].title);
        var $techUsed = $('<li>'+tech[i]['title']+'</li>');
        $techUsed.appendTo('.techused'); 
    }
    
    var highlights = workObj[0].highlights;
    for (var i in highlights){
        //console.log(highlights[i].title);
        var $siteHighlights = $('<li>'+tech[i]['title']+'</li>');
        $siteHighlights.appendTo('.siteHighlights');
    }
    
    
};//perryman

function privateIndustry(){
    $('.workSection').show();
    $('#welcomeSection').hide();
    
    var $workLogo = $('<img src="img/header/logo/james-fill.jpg" class="logoInner"/>');
        $workLogo.appendTo('.workPageLogo');
    
    var $workImage = $('<img src="'+workObj[1]['workImage']+'"/>');
        $workImage.appendTo('.workImage');
    
    var $workTitle = $('<h1 class="workTitle">'+workObj[1]['title']+'</h1>');
        $workTitle.appendTo('.workPortfolio');
    
    var $workDescription = $('<p class="workDesc">'+workObj[1]['workDescription']+'</p>');
        $workDescription.appendTo('.workDescription');
            
        var $siteLink = $('<h1 class="launch"><a href="'+workObj[1]['siteAddress']+'" target="_blank">Launch Site</a></h1>');
        $siteLink.appendTo('.siteLaunch');
    //console.log(title[0].title);
    
    var tech = workObj[1].techUsed;    
    for (var i in tech){
        //console.log(tech[i].title);
        var $techUsed = $('<li>'+tech[i]['title']+'</li>');
        $techUsed.appendTo('.techused'); 
    }
    
    var highlights = workObj[1].highlights;
    for (var i in highlights){
        //console.log(highlights[i].title);
        var $siteHighlights = $('<li>'+tech[i]['title']+'</li>');
        $siteHighlights.appendTo('.siteHighlights');
    }
};//perryman
*/
$(document).ready(function(){
    buildWork();
    });