$(function(){

    var updateCaption = function(slider){
        var cap = slider.$currentPage.find('.caption').html();
        $('#current-caption')
            .html(cap || '')
            .fadeIn(200);
    };

    $('#slider')
        .anythingSlider({
            resizeContents      : true,
            addWmodeToObject    : 'opaque',
            navigationFormatter : function(index, panel){ // Format navigation labels with text
                return ['Welcome', 'Sky Catcher', 'Neon Night Ballz', 'Penguin Pushers', 'The Fishman Cometh', 'No More Bombs', 'Psychokinetic', 'Diamond Thief', 'Ranger Danger'] [index - 1];
            },
            // Callback when the plugin finished initializing
            onInitialized: function(e, slider) {
                updateCaption(slider);
            },
            // Callback before slide animates
            onSlideBegin: function(e, slider) {
                $('#current-caption').fadeOut(200);
            },
            // Callback when slide completes - no event variable!
            onSlideComplete: function(slider) {
                updateCaption(slider);
            }
        })
        // Initialize video extension
        // see https://developers.google.com/youtube/player_parameters?hl=en#Parameters for a list of parameters
        .anythingSliderVideo({
            // video id prefix; suffix from $.fn.anythingSliderVideo.videoIndex
            videoId : 'asvideo',
            // auto load YouTube api script
            youtubeAutoLoad : true,
            // see:  https://developers.google.com/youtube/player_parameters#Parameters
            youtubeParams: {
                modestbranding : 1,
                iv_load_policy : 3,
                fs : 1
            }
        });
});