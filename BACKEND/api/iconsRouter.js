const express = require('express');
const router = express.Router();

const { getAllIcons, getOneIcon, getAllIconsPagination, postIcons, updateIcons, deleteIcons} = require('../controller/items/icons')

router.get('/', getAllIcons);
router.get('/:id', getOneIcon);
router.get('/pagination/:page', getAllIconsPagination);
router.post('/', postIcons);
router.put('/:id', updateIcons);
router.delete('/:id', deleteIcons);

module.exports = router;
