// PACKAGES
const express = require('express');

// ROUTER
const icons = require('./iconsRouter');
const items = require('./itemsRouter'); 

// ENDPOINT
const router = express.Router();
router.get('/', (req, res) => {
    res.send('API is running.....');
});

router.use('/icons', icons); // http://localhost:3444/api/icons
router.use('/items', items); // http://localhost:3444/api/items

module.exports = router;
