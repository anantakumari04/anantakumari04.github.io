//CRUD OPERATIONS

db.employees.insertOne({
  name: "John Smith",
  email: "john@gamil.com",
  department: "IT",
  salary: 1456,
  location: ["FL", "OH"],
  date: Date(),
});

db.employees.find(); //toshow the data

show.collections; //shows employee table name

db.employees.insertMany([
  {
    name: "Mike Joseph",
    email: "mike@gmail.com",
    department: "IT",
    salary: 2456,
    location: ["EL", "TX"],
    date: Date(),
  },
  {
    name: "Cathy G",
    email: "cathy@gmail.com",
    department: "IT",
    salary: 3456,
    location: ["AZ", "TX"],
    date: Date(),
  },
]);
//db.users.find({},{_id:0,name:1})-> only show name first parameter blank means filter all fields will show, second para means name field to show and 1 means true and id 0  means not to show id // second one projection
//  db.users.find({},{_id:0,name:1,age:1})
// [
//   { name: 'Akshya', age: 21 },
//   { name: 'Ananta', age: 20 },
//   { name: 'Harsh', age: 23 },
//   { name: 'Arindam', age: 25 } ]

// db.users.drop()  -> to delete table users


db.employees.insertMany([
  {
    name: "Amy",
    email: "amy@gmail.com",
    department: "HR",
    salary: 2000,
    location: ["NY", "TX"],
    date: Date(),
  },
  {
    name: "Rafeal",
    email: "rafeal@gmail.com",
    department: "Admin",
    salary: 1500,
    location: ["OH", "TX"],
    date: Date(),
  },
]);