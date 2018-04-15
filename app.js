const express = require('express');
const createActivity = require('./controllers/createActivity');

// instantiate express
const app = express();

app.post('/profile/activities', createActivity);

app.listen(3000, () => console.log('Microlife app listening on port 3000!'));