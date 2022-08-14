const User = require('../models/User');

const UserController = {
  index: (req, res) => {
    const users = User.findAll();
    res.render('user/index', { users });
  },

  show: (req, res) => {
    const { id } = req.params;
    const user = User.findById(id);
    res.render('user/show', { user });
  },
  
  createForm: (req, res) => {
    res.render('user/form', { user: null });
  },

  editForm: (req, res) => {
    const { id } = req.params;
    const user = User.findById(id);
    res.render('user/form', { user });
  },

  create: (req, res) => {
    const user = req.body;
    const avatar = req.file.filename
    
    User.create(user, avatar);
    
    res.redirect('/users');
  },
  
  update: (req, res) => {
    const { id } = req.params;
    const user = req.body;
    const avatar = req.file.filename;

    User.removeAvatar(id);
    User.update(id, user, avatar);

    res.redirect('/users');
  },

  delete: (req, res) => {
    const { id } = req.params;

    User.removeAvatar(id);
    User.delete(id);

    res.redirect('/users');
  }
}

module.exports = UserController;