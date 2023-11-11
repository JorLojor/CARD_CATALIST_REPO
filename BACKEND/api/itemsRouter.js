const express = require('express');
const router = express.Router();

const { getAllItems, getOneItem, postItem, updateItem, deleteItem } = require('../controller/items/Items');

router.get('/', getAllItems);
router.get('/:id', getOneItem);
router.post('/', postItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;
