// PACKAGES
const express = require('express');

// ROUTER
const icons = require('./iconsRouter');
const items = require('./itemsRouter'); 
const user  = require('./user');

// ENDPOINT
const router = express.Router();
router.get('/', (req, res) => {
    res.send('API is running.....');
});

router.use('/icons', icons); // http://localhost:3444/api/icons
router.use('/items', items); // http://localhost:3444/api/items
router.use('/user', user); // http://localhost:3444/api/user

module.exports = router;
