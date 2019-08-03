const express = require('express');
const { userController } = require('../controllers/');

const router = express.Router();

router.post('/', userController.signUp);
router.patch('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;
