//this is where the server defines an action, 
const Skills = require('../models/skill')


module.exports={
  index,
  show
}


function index(req,res){
  res.render('skills/index', {skills : Skills.getAllSkills()})
}

function show(req,res){
  res.render('skills/show', {skill : Skills.getOne(req.params.id)})
}