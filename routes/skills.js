var express = require('express');
var router = express.Router();

var skillsController = require('../controllers/skills')

/* GET skills listing. */
router.get('/', skillsController.index)


router.get('/:id', skillsController.show)

module.exports = router;