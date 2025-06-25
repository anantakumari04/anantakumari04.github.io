db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$set:{salary:3000}}
)


db.employees.updateMany(
    {department:"IT"},
    {$set:{salary:3000}}
)

//if not there then create point
db.employees.updateMany(
    {},
    {$set:{points:1}}  
)
//all have 1 while It deparment point 2 
db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:1}}   
)

db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:-1}}   
)
//usert true meand agr h to update kr dega nhi to insert kr dega
db.employees.updateOne(
    {email:"krish@gmail.com"},
    {$set:{name: "Krish", department:"HR", salary:2700}},
    {upsert:true}
)

db.employees.deleteOne({email:"krish@gmail.com"})
db.employees.deleteMany({department:"Admin"})

//Fetches the employee with the highest salary by sorting in descending order and limiting to 1.
db.employees.find().sort({salary:-1}).limit(1)//beacuse of -1 highest element will be displayed 


//In .find(), "key": "$field" does not map data, it inserts the string "$field"; use $project in aggregate() to show fields with different keys.
 db.employees.find({},{_id:0,Empname:"$name"})

 db.employees.updateMany(
    {},
    {$unset:{score:""}}  //delete attribute set
  )


//If some documents don’t have points, MongoDB will ignore them silently — no errors, just skips.
//Renames the field points to score in all employee documents.
  db.employees.updateMany(
    {},
    {$rename:{points:"score"}}
  )

  db.employees.updateMany(
    {},
    {$push:{points: 3}}
  )

  db.employees.updateMany(
    {department:"IT"},
    {$push:{points: 7}}
  )

//pull means remone points greater than 3
  db.employees.updateMany(
    {department:"IT"},
    {$pull:{points: { $gt:3}}}
  )

  db.employees.updateMany(
    {},
    {$addToSet:{location:'LA'}}
  )

  db.employees.updateMany(
    {},
    {$pop:{location:1}}
  )

  db.employees.updateMany(
    {},
    {$pop:{location:-1}}
  )

