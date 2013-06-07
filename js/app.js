define([
    'domReady',
    'jquery',
    'director',
    'select2',
    'css/css'
],
function(domReady, $,  director, select2){

    return init;


    function init() {
        domReady(function(){
            var router = director.Router({});
            //router.init('/quick/journal');

            $('#current_song_tags').select2({
                tags:["red", "green", "blue"],
                width: "200px"
            });

            $('#limit_music_tags').select2({
                tags:["red", "green", "blue"],
                width: "500px"
            });

        });
    };

});