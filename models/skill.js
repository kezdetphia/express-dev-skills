//this is where we store the data




const skills = [
  {id : 43435, skill : 'HTML', done: true},
  {id : 44875, skill : 'JavaScript', done: false},
  {id : 48765, skill : 'Express.JS', done: true},
]

function getAllSkills(){
  return skills
}

function getOne(id){
  id = parseInt(id);
  return skills.find(skill=>skill.id ===id)
}

function create(skill){
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill)
}

function deleteOne(id){
  id = parseInt(id)
  const idx = skills.findIndex(skill=>skill.id===id)
  skills.splice(idx,1)
}



module.exports = {
  getAllSkills,
  getOne,
  create,
  deleteOne
}
