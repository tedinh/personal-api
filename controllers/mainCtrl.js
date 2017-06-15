var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js');

module.exports = {
    getName: function(req, res) {
      res.json(user.name);
    },

    getLocation: function(req, res) {
      res.json(user.location);
    },

    getOccupations: function(req, res) {
      if (req.query.order === 'desc'){
        var order = user.occupations.sort();
        res.json(order);
      }
      if (req.query.order === 'asc'){
        var order = user.occupations.reverse();
        res.json(order);
      }
      else {
        res.json(user.occupations);
      }
    },

    getOccupationsLatest: function(req, res) {
      res.json(user.occupations.slice(- 1));
      },

    getHobbies: function(req, res){
      res.json(user.hobbies);
    },

    getHobbiesType: function(req, res){
      var type = req.params.type;
      var filtered = user.hobbies.filter(function(hobbies){
        return hobbies.type === type;
      });
      res.json(filtered);
    },

    getFamily: function(req, res) {
      res.json(user.family);
    },

    getFamilyGender: function(req, res){
      var gender = req.params.gender;
      var gen = user.family.filter(function(family){
        return family.gender === gender;
      });
      res.json(gen);
    },

    getRestaurants: function(req, res){
      res.json(user.restaurants);
    },

    getRestaurantsName: function(req, res){
      var name = req.params.name;
      var restName = user.restaurants.filter(function(restaurants){
        return restaurants.name === name;
      });
      res.json(restName);
    },

    putName: function(req, res){
      user.name = req.query.name;
      res.json(user.name);
    },

    putLocation: function(req, res){
      user.location = req.query.location;
      res.json(user.location);
    },

    postHobbies: function(req, res){
      user.hobbies.push(req.query);
      res.json(user.hobbies);
    },

    postOccupations: function(req, res){
      user.occupations.push(req.query);
      res.json(user.occupations);
    },

    postFamily: function(req, res){
      user.family.push(req.query);
      res.json(user.family);
    },

    postRestaurants: function(req, res){
      user.restaurants.push(req.query);
      res.json(user.restaurants);
    },

    getSkillz: function(req, res){
      if (req.query.experience){
        var exp = skillz.filter(function(skillz){
          return skillz.experience === req.query.experience;
        });
        res.json(exp);
      } else{
        res.json(skillz)
      }
    },

    postSkillz: function(req, res){
      skillz.push(req.query);
      res.json(skillz);
    },

    getSecrets: function(req, res){
      res.json(secrets);
    }

  };
