Hoax Couchapp
==============

Currently Does NOTHING.

Useage
------

Just to preview, just run

    python -m "SimpleHTTPServer"

Then open `http://localhost:8000/` in your browser.


As a couchapp, you will need [node couchapp](https://github.com/mikeal/node.couchapp.js) installed.

    ./push http://admin:admin@localhost:5984/champ

Then open `http://localhost:5984/champ/_design/champ-couchapp/_rewrite/`

If you want to minimize everything to one file, you will need jam installed.

    npm install -g jamjs
    ./push http://admin:admin@localhost:5984/champ compile


If you want to be really cool and have auto-reloading on every save (and the browser auto-refreshes):

    npm install -g eye
    eye ./push http://admin:admin@localhost:5984/champ

That will watch the directory, and push to couch on a change. champ-couchapp will be following the changes feed, and fo an window.location.reload()

