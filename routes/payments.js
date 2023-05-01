const { Router } = require('express');

const paymentsController = require('../controllers/payments');

const auth = require('../middlewares/auth');

const router = Router();

router.post('/verifyPayment', auth, paymentsController.verifyPayment);

router.get('/userSubscriptions', auth, paymentsController.getUserPayments);

module.exports = router;