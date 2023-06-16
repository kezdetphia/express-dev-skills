var express = require('express');
var router = express.Router();

var skillsController = require('../controllers/skills')

/* GET skills listing. */
router.get('/', skillsController.index)

router.get('/new', skillsController.new)

router.get('/:id', skillsController.show)

router.delete('/:id', skillsController.deleteSkill)

router.post('/', skillsController.create)














module.exports = router;
