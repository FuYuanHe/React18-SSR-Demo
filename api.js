const express = require('express')
const cors = require('cors');
const session = require('express-session');
const app = express();
app.use(cors());
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'zhufeng'
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const users = [{ id: 1, name: 'zhufeng1' }, { id: 2, name: 'zhufeng2' }, { id: 3, name: 'zhufeng3' }];
app.get('/api/users', (req, res) => {
  res.json({
    success: true,
    data: users
  });
});
app.post('/api/login', (req, res) => {
  const user = req.body;
  req.session.user = user;
  res.json({
    success: true,
    data: user
  });
});
app.get('/api/logout', (req, res) => {
  req.session.user = null;
  res.json({
    success: true
  });
});
app.get('/api/user', (req, res) => {
  const user = req.session.user;
  if (user) {
    res.json({
      success: true,
      data: user
    });
  } else {
    res.json({
      success: false,
      error: '用户未登录'
    });
  }
});
app.listen(5000, () => console.log('api server started on port 5001'));