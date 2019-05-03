const stream = require('../controllers/stream.controller.js');

router = require('express').Router();
    
router.post('/sample', stream.sample);

module.exports = router;