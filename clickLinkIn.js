setInterval(function () {
    var i = 0;
    jQuery("html, body").animate({ scrollTop: jQuery(document).height() }, 500);
    jQuery('.mn-person-info').each(function(){
        var button = jQuery(this).find('.button-secondary-small');
        if ($(button).length && i < 10){
            jQuery(button).click();
            jQuery("html, body").animate({ scrollTop: jQuery(document).height() }, 500);
        }
        i++;
    })
}, 5000);
