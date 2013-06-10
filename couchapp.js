var couchapp = require('couchapp')
    , path = require('path');


var champ_views = require('./jam/champ-views/champ-views');


ddoc = {
    _id: '_design/champ',
    views: champ_views,
    lists: {},
    shows: {},
    rewrites: [
        { "description": "Access to this database" , "from": "_db" , "to"  : "../.." },
        { "from": "_db/*" , "to"  : "../../*" },
        { "description": "Access to this design document" , "from": "_ddoc" , "to"  : "" },
        { "from": "_ddoc/*" , "to"  : "*"},
        {"from": "/", "to": "index.html"},
        {"from": "/*", "to": "*"}
    ],
    filters: {
        just_file_docs: function(doc, req) {
            if (doc._attachments && doc._attachments['file.mp3']) {
                if (req.query && req.query.doc_id && req.query.doc_id === doc._id) {
                    return true;
                }
            }
            return false;
        }
    }
  };

module.exports = ddoc;


couchapp.loadAttachments(ddoc, __dirname);