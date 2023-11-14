const express = require('express');
const router = express.Router();

const {getAllUserPaginate, getUserById, SearchUserByNameAndUsername, createUser,updateUser,deleteUser } = require('../controller/users/User');

router.get('/pagination/:page', getAllUserPaginate);
router.get('/:id',getUserById);
router.get('/search',SearchUserByNameAndUsername);
router.post('/',createUser);
router.put('/id:',updateUser); 
router.delete('/:id',deleteUser);

module.exports = router;
