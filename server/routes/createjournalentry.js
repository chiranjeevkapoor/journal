const express = require('express');

const router = express.Router();

const createjournalentry = require('../controllers/createjournalentry')

router.route('/').post(createjournalentry)

module.exports = router;