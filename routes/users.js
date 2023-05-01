const { Router } = require('express');

const usersController = require('../controllers/users');

const router = Router();

router.get('/', usersController.getAllUsers);

router.get('/user', usersController.getOneUser);

router.post('/user', usersController.createAccount);

router.post('/loginUser', usersController.login);

router.post('/googleAuth', usersController.googleLogin);

module.exports = router;