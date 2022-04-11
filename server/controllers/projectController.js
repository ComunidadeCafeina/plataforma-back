const Project = require("../../database/models/projectModel");

const Projects = {
  
  all(req, res, next) {
    Project.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  },

  create(req, res, next) {
    const {  brandicon, title, description, restrict, link } = req.body;

    Project.create({
        brandicon, title, description, restrict, link,
    })
      .then((result) => {
        res.status(201).json(result); //return with ID -> 201 (CREATED)
      })
      .catch(next);
  },
};

module.exports = Projects;
