const database = require('../infra/database')

exports.getSocialNetworks = function() {
    return database.query('SELECT * FROM compiladoras.socialnetworks')
    
}

