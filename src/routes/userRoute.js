const router = require('express').Router();
const authUserController = require('../controllers/authUserController');
const {authenticateUsers, checkIfAdmin} = require('../middlewares/authMiddleware');

router.post('/signup', authUserController.registerUser);
router.post('/login', authUserController.loginUser);
router.get('/users', authUserController.viewUsers);
router.delete('/users/:id', authUserController.deleteUser);

module.exports = router;