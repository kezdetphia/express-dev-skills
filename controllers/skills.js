//this is where the server defines an action, 
const Skill = require('../models/skill')


module.exports={
  index,
  show,
  new: newSkill,
  create,
  show,
  deleteSkill
}


function index(req,res){
  res.render('skills/index', {
    skills : Skill.getAllSkills(),
    title: 'Skills Details'
  })
}

function show(req,res){
  res.render('skills/show', {
    skill : Skill.getOne(req.params.id),
    title: 'All Skills'
  })
}

function newSkill(req,res){
  res.render('skills/new',{
    title: 'New Skill'
  })
}

function create(req,res){
  Skill.create(req.body)
  res.redirect('/skills')
}

function deleteSkill(req,res){
  Skill.deleteOne(req.params.id)
  res.redirect('/skills')
}

