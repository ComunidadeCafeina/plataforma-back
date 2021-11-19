const database = require('../infra/database')

exports.getProjects = function() {
    return database.query('SELECT * FROM compiladoras.projects')
    
}

