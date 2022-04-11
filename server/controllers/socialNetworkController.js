const SocialNetwork = require("../../database/models/SocialNetwork");

const SocialNetworks = {
  all(req, res, next) {
    SocialNetwork.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  },

  create(req, res, next) {
    const {  Id, brandicon, title, description, restrict, link } = req.body;

    SocialNetwork.create({
        Id, brandicon, title, description, restrict, link,
    })
      .then((result) => {
        res.status(201).json(result); //return with ID -> 201 (CREATED)
      })
      .catch(next);
  },
};

module.exports = SocialNetworks;
