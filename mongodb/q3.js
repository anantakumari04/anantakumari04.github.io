db.employees.find()
db.employees.find().skip(1) // skip 1st document
db.employees.find().limit(1) //display only 1st document


db.employees.find().skip(1).limit(1); // only display 2nd document

db.employees.find({department:"IT"})
db.employees.find({location:"TX"})
db.employees.find({department:"IT"},{_id:0, name:1}); //only name will show who belong to it department
db.employees.find({department:"IT"},{_id:0, name:1,salary:1});
db.employees.find(
    {department:{$eq:"IT"}},
    {_id:0, name:1,salary:1}
);

db.employees.find(
    {salary:{$gt:3000}},   //gt means greater than salary morethan 3k then show name and salary
    {_id:0, name:1,salary:1}
);

db.employees.find(
    {salary:{$gte:3000}},   //gte means greater than  and equal to salary morethan 3k then show name and salary
    {_id:0, name:1,salary:1}
);


db.employees.find(
    {salary:{$lt:3000}},     //lt means less than
    {_id:0, name:1,salary:1}
);

db.employees.find(
    {salary:{$lte:3000}},   
    {_id:0, name:1,salary:1}
);

db.employees.find(
    {salary:{$lte:3000}, department:"IT"},   
    {_id:0, name:1,salary:1}
);

//in or only one condition must be true
db.employees.find(
      {$or:[{salary:{$lte:3000}}, {department:"IT"}]},   
    {_id:0, name:1,salary:1}
);


db.employees.find(
      {$and:[{salary:{$lte:3000}}, {department:"IT"}]},   
    {_id:0, name:1,salary:1}
);


db.employees.find(
    {
        $or: [{},{}]  //same for and 
    }
)

db.employees.find({department:{$ne:"IT"}})
db.employees.find({department:{$eq:"IT"}})

badmoshhhh



