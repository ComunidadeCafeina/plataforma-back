const SocialNetwork = require("../../database/models/socialNetworkModel");

const SocialNetworks = {
  all(req, res, next) {
    SocialNetwork.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  },

  create(req, res, next) {
    const { text, icon, link, teste } = req.body;

    SocialNetwork.create({
      text, icon, link, teste
    })
      .then((result) => {
        res.status(201).json(result); //return with ID -> 201 (CREATED)
      })
      .catch(next);
  },
};

module.exports = SocialNetworks;
