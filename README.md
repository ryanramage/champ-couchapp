Hoax Couchapp
==============

Currently Does NOTHING.

Useage
------

Just to preview, just run

    python -m "SimpleHTTPServer"

Then open `http://localhost:8000/` in your browser.


As a couchapp, you will need [erica](https://github.com/benoitc/erica) installed.

    ./push http://admin:admin@localhost:5984/hoax

Then open `http://localhost:5984/hoax/_design/hoax-couchapp/_rewrite/`

If you want to minimize everything to one file, you will need jam installed.

    npm install -g jamjs
    ./push http://admin:admin@localhost:5984/hoax compile


If you want to be really cool and have auto-reloading on every save (and the browser auto-refreshes):

    npm install -g eye
    eye ./push http://admin:admin@localhost:5984/hoax

That will watch the directory, and push to couch on a change. hoax-couchapp will be following the changes feed, and fo an window.location.reload()

