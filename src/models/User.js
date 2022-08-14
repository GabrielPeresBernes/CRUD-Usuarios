const fs = require('fs');
const {v4} = require('uuid');

let db = require('../database/db.json');

const { uploadPath } = require('../config/upload');

const writeToDB = () => {
  const json = JSON.stringify(db);
  fs.writeFileSync('src/database/db.json', json);
}

const User = {
  findAll: () => db.users,

  findById: (id) => {
    const user = db.users.find(user => user.id === id);
    return user;
  },

  removeAvatar: (id) => {
    const user = db.users.find(user => user.id === id);
    fs.unlinkSync(
      `${uploadPath}/${user.avatar}`
    );
  },

  create: (user, avatar) => {
    db.users.push({ id: v4(), ...user, avatar });
    writeToDB();
  },

  update: (id, user, avatar) => {
    const userIndex = db.users.findIndex(user => user.id === id);
    db.users[userIndex] = { id, ...user, avatar };
    writeToDB();
  },

  delete: (id) => {
    const userIndex = db.users.findIndex(user => user.id === id);
    db.users.splice(userIndex, 1);
    writeToDB();
  }
}

module.exports = User;