const express = require('express');
const router = express.Router();

// route    GET api/users
// access  Private
router.get('/ ', (req, res) => {
  res.send('Get all dashboard details');
});

// route    POST api/users
// access  Private
router.post('/ ', (req, res) => {
  res.send('Add dashboard details');
});

// route    PUT api/users
// access  Private
router.put('/', (req, res) => {
  res.send('Update dashboard details');
});

// route    DELETE api/users
// access  Private
router.delete('/:id ', (req, res) => {
  res.send('Delete dashboard details');
});

module.exports = router;
