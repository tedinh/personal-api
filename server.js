var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');
var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getOccupationsLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsName);
app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);

app.get('/skillz', mainCtrl.getSkillz);

app.put('/name', mainCtrl.putName);
app.put('/location', mainCtrl.putLocation);

app.post('/hobbies', mainCtrl.postHobbies);
app.post('/occupations', mainCtrl.postOccupations);
app.post('/family', mainCtrl.postFamily);
app.post('/restaurants', mainCtrl.postRestaurants);
app.post('/skillz', middleware.generateID, mainCtrl.postSkillz);






app.listen(3000, function(){
  console.log('Example app listening on port 3000');
});
