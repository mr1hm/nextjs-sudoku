require('dotenv/config')
const express = require('express');
const google = require('./google');
const jwt = require('jsonwebtoken');
const sessions = require('./sessions');

const app = express();

app.set('view engine', 'ejs');

app.use(sessions);

app.get('/', (req, res) => {
  const name = req.session.user
    ? req.session.user.name
    : 'Guest';
  res.render('home', { name })
})

app.get('/login', (req, res) => {
  if (!req.session.user) res.render('login')
  else res.redirect('/');
})

app.post('/api/auth', express.json(), (req, res, next) => {
  google
    .getToken(req.body.code)
    .then(result => {
      const { tokens: { id_token } } = result;
      req.session.user = jwt.decode(id_token);
      res.end();
    })
    .catch(err => next(err));
})

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    error: 'an unexpected error occurred'
  })
})

app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT);
})
