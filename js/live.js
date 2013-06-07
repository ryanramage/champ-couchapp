(function(){


    var currentETag;

    onLoad(function pageLoaded() {
        console.log('starting live reload');
        if (window.EventSource) return eventsource();
        else setInterval(polling, 1500);
    });


    /* Use couchdb eventsource changes feed. Reload page when id matches this ddoc */
    function eventsource() {

        fetchName(function(err, name){
            var ddoc_name = '_design/' + name;

            var source = new EventSource("_db/_changes?feed=eventsource&since=now");
            var sourceListener = function(e) {
                var data = JSON.parse(e.data);

                if (data.id !== ddoc_name) return;


                window.location.reload();
            };
            // start listening for events
            source.addEventListener('message', sourceListener , false);

        });
    }


    /* Poll for etag changes to the ddoc */
    function polling() {
        fetchStatus(function(err, etag){
            if (!currentETag) currentETag = etag;
            else {
                if (currentETag !== etag) {
                    window.location.reload();
                }
            }
        });
    }


    function fetchStatus(callback) {

        var client = new XMLHttpRequest();
        client.onreadystatechange = function() {
            if (this.readyState == this.DONE) {
                callback(null, client.getResponseHeader('ETag').toString());
            }
        };
        client.open("HEAD", '_ddoc');
        client.send();
    }

    function fetchName(callback) {
        var client = new XMLHttpRequest();
        client.onreadystatechange = function() {
            if (this.readyState == this.DONE) {
                var data = JSON.parse(this.response);
                callback(null, data.name);
            }
        };
        client.open("GET", '_ddoc/_info');
        client.send();
    }

    function onLoad(callback) {

        if (document.addEventListener) {
            //Standards. Hooray! Assumption here that if standards based,
            //it knows about DOMContentLoaded.
            document.addEventListener("DOMContentLoaded", callback, false);
            window.addEventListener("load", callback, false);
        } else if (window.attachEvent) {
            window.attachEvent("onload", callback);

            testDiv = document.createElement('div');
            try {
                isTop = window.frameElement === null;
            } catch (e) {}

            //DOMContentLoaded approximation that uses a doScroll, as found by
            //Diego Perini: http://javascript.nwbox.com/IEContentLoaded/,
            //but modified by other contributors, including jdalton
            if (testDiv.doScroll && isTop && window.external) {
                scrollIntervalId = setInterval(function () {
                    try {
                        testDiv.doScroll();
                        callback();
                    } catch (e) {}
                }, 30);
            }
        }
    }




})();