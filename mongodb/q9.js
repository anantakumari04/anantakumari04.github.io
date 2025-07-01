db.employees.find({name:{$regex:"Cathy"}})  //live operator
//options will ignore the case and still give result  i means case insensitive
db.employees.find({name:{$regex:"cathy",$options:"i"}})
//all the letters begin with c appear
db.employees.find({name:{$regex:"^c",$options:"i"}})
//y$ means letter ends with letter y
db.employees.find({name:{$regex:"y$",$options:"i"}})