const express = require('express');
const router = express.Router();
const userslist = require('../database/users');
const { v4: uuidv4 } = require('uuid');

function Idgeneration() {
  return uuidv4();
}

router.get('/users', (req, res) => {
    try {
      const UsersList = userslist.map((user) => ({
        email: user.email,
        firstName: user.firstName,
        id: user.id,
      }));
  
      if (UsersList.length === 0) {
        return res.status(400).json({ error: 'No users found' });
      }
  
      res.json({
        message: 'Users retrieved',
        success: true,
        users: UsersList,
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

router.get('/users/:id', (req, res) => {
  try {
    const { id } = req.params;
    const user = userslist.find((user) => user.id === id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({
      success: true,
      user: {
        email: user.email,
        firstName: user.firstName,
        id: user.id,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/add', (req, res) => {
  try {
    const { email, firstName } = req.body;
    const id = Idgeneration(); 

    const newlyAddedUser = {
      id,
      email,
      firstName,
    };

    userslist.push(newlyAddedUser);

    res.json({
      message: 'User added',
      success: true,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/users/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { email, firstName } = req.body;
    const user = userslist.find((user) => user.id === id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.email = email || user.email;
    user.firstName = firstName || user.firstName;

    return res.status(200).json({ message: 'User updated', success: true });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
  });
  
  module.exports = router;
  

module.exports = router;
