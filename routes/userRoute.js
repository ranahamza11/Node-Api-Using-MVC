const express = require('express');
const {getUsers, getUser, updateUser, deleteUser, createUser} = require('../controllers/userController');

const router = express.Router();


router.get('/', getUsers);
router.get('/:id', getUser);

router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/', createUser);

module.exports = router;