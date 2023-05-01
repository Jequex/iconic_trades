const { Router } = require('express');

const router = Router();

router.use('/users', require('./users'));

router.use('/payments', require('./payments'));

module.exports = router;