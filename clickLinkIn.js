setInterval(function () {
    jQuery('.mn-person-info').each(function(){
        var button = jQuery(this).find('.button-secondary-small');
        var friendName = jQuery(this).find('.mn-person-info__name').text();
        if ($(button).length ){
            jQuery("html, body").animate({ scrollTop: jQuery(document).height() }, 500);
            jQuery(button).click();
            console.log('Sent connect with ' + friendName.trim());
        }
    })
}, 5000);
