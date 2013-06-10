var jam = {
    "packages": [
        {
            "name": "bootstrap",
            "location": "jam/bootstrap"
        },
        {
            "name": "director",
            "location": "jam/director",
            "main": "director.js"
        },
        {
            "name": "domReady",
            "location": "jam/domReady",
            "main": "domReady.js"
        },
        {
            "name": "hoax-views",
            "location": "jam/hoax-views",
            "main": "hoax-views.js"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "jscss",
            "location": "jam/jscss",
            "main": "lib/index.js"
        },
        {
            "name": "md5",
            "location": "jam/md5",
            "main": "md5.js"
        },
        {
            "name": "pouchdb",
            "location": "jam/pouchdb",
            "main": "dist/pouchdb.amd-nightly.js"
        },
        {
            "name": "ractive",
            "location": "jam/ractive",
            "main": "Ractive.js"
        },
        {
            "name": "select2",
            "location": "jam/select2",
            "main": "select2.js"
        },
        {
            "name": "simple-uuid",
            "location": "jam/simple-uuid",
            "main": "uuid.js"
        },
        {
            "name": "text",
            "location": "jam/text",
            "main": "text.js"
        }
    ],
    "version": "0.2.17",
    "shim": {
        "director": {
            "exports": "Router"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "bootstrap",
            "location": "jam/bootstrap"
        },
        {
            "name": "director",
            "location": "jam/director",
            "main": "director.js"
        },
        {
            "name": "domReady",
            "location": "jam/domReady",
            "main": "domReady.js"
        },
        {
            "name": "hoax-views",
            "location": "jam/hoax-views",
            "main": "hoax-views.js"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "jscss",
            "location": "jam/jscss",
            "main": "lib/index.js"
        },
        {
            "name": "md5",
            "location": "jam/md5",
            "main": "md5.js"
        },
        {
            "name": "pouchdb",
            "location": "jam/pouchdb",
            "main": "dist/pouchdb.amd-nightly.js"
        },
        {
            "name": "ractive",
            "location": "jam/ractive",
            "main": "Ractive.js"
        },
        {
            "name": "select2",
            "location": "jam/select2",
            "main": "select2.js"
        },
        {
            "name": "simple-uuid",
            "location": "jam/simple-uuid",
            "main": "uuid.js"
        },
        {
            "name": "text",
            "location": "jam/text",
            "main": "text.js"
        }
    ],
    "shim": {
        "director": {
            "exports": "Router"
        }
    }
});
}
else {
    var require = {
    "packages": [
        {
            "name": "bootstrap",
            "location": "jam/bootstrap"
        },
        {
            "name": "director",
            "location": "jam/director",
            "main": "director.js"
        },
        {
            "name": "domReady",
            "location": "jam/domReady",
            "main": "domReady.js"
        },
        {
            "name": "hoax-views",
            "location": "jam/hoax-views",
            "main": "hoax-views.js"
        },
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "jscss",
            "location": "jam/jscss",
            "main": "lib/index.js"
        },
        {
            "name": "md5",
            "location": "jam/md5",
            "main": "md5.js"
        },
        {
            "name": "pouchdb",
            "location": "jam/pouchdb",
            "main": "dist/pouchdb.amd-nightly.js"
        },
        {
            "name": "ractive",
            "location": "jam/ractive",
            "main": "Ractive.js"
        },
        {
            "name": "select2",
            "location": "jam/select2",
            "main": "select2.js"
        },
        {
            "name": "simple-uuid",
            "location": "jam/simple-uuid",
            "main": "uuid.js"
        },
        {
            "name": "text",
            "location": "jam/text",
            "main": "text.js"
        }
    ],
    "shim": {
        "director": {
            "exports": "Router"
        }
    }
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}