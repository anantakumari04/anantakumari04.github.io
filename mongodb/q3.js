db.employees.find()
db.employees.find().skip(1) // skip 1st document
db.employees.find().limit(1) //display only 1st document


db.employees.find().skip(1).limit(1); // only display 2nd document

db.employees.find({department:"IT"})
db.employees.find({location:"TX"})
db.employees.find({department:"IT"},{_id:0, name:1}); //only name will show who belong to it department