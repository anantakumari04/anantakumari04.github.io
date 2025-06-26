db.employees.find(
    {salary:{$gt:3000}},
    {name:1}
).limit(2).skip(1)

db.employees.find(
    {$or:[{salary:{$gt:3000}},{depatment:"IT"}]},
    {name:1}
)

// db.employees.countDocuments()


//pipelines->efficient way of showing data
//-1 means desending order
// db.employees.aggregate([
//     {$match:{salary:{$gt:1000}}},
//     {$project:{name:1,salary:1,location:1}},
//     {$sort:{name:1}},   
//     {$limit:1}
// ])


db.employees.updateMany(
    {},{$addToSet:{location:"FL"}}
)


//unwind->location field now seperates from array and show on seperate line
// db.employees.aggregate([
    
//     {$project:{_id:0,name:1, location:1}},
//     {$unwind:"$location"}
    
// ])

db.employees.aggregate([  
    {$project:{_id:0, EmpName:"$name"}},  //only for display Empname is showing    
])

//bonus is a calculated field
db.employees.aggregate([  
    {$project:{
        _id:0, 
        name:1,
         salary:1, 
         bonus:{$multiply:["$salary",2]}
        }},  
  
])

db.employees.aggregate([
    {$group:{_id:"$department",
        total:{$sum:"$salary"}
    }},
])

//null means show total sum of all salary
db.employees.aggregate([
    {$group:{
        _id:null,
        total:{$sum:"$salary"}
    }},
])

//create a new collers orders
//field
//empId:  //orderValue


//john has placed an order id whose value is 1200
db.orders.insertOne(
    {empId: ObjectId('685a8a5960e56f635f748a5f'),
        orderValue:1200
    }
)

db.orders.insertMany([
    {empId: ObjectId('685bb8e8cad4907a8b748a5f'),
        orderValue:1300
    },
    {
        empId: ObjectId('685bb8e8cad4907a8b748a60'),
        orderValue:1400
    },
    {
        empId:  ObjectId('685bc9dddad9672675748a63'),
        orderValue:1500
    }
])



//it will join employess with order based on id
db.employees.aggregate([
    {$match:{salary:{$gt:2000}}},
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"empId",
        as:"orders"
    }},
    {$unwind:"$orders"},
    {$project:{name:1,salary:1,"orders.orderValue":1}},
    
]);

db.empCountry.insertMany([
    {empId:  ObjectId('685a8a5960e56f635f748a5f'),
        country:"USA"
     },
     {empId:  ObjectId('685bb8e8cad4907a8b748a5f'),
        country:"Japan"
     },
     {empId:  ObjectId('685bb8e8cad4907a8b748a60'),
        country:"Europe"
     },
     {empId: ObjectId('685bc9dddad9672675748a63'),
        country:"India"
     },

])

db.employees.aggregate([
    {$lookup:{
        from: "empCountry",
        localField:"_id",
        foreignField:"empId",
        as:"empCountry"
    }},
    {$unwind:"$empCountry"}
])

//to create index
db.employees.createIndex({"email":1})

db.employees.getIndexes() //view index

db.employees.dropIndex("email_1") //delete index
db.employees.find({email:"john@gmail.com"}).explain("executionStats")

db.employees.aggregate([
    {$group:
        {_id:{country:"$empCountry.country",name:"$name"},
        total:{$sum:"$score"}}
    }
])
db.employees.aggregate([
  {
    $lookup: {
      from: "empCountry",
      localField: "_id",
      foreignField: "empId",
      as: "empCountry"
    }
  },
  {
    $unwind: "$empCountry"
  },
  {
    $group: {
      _id: {
        country: "$empCountry.country",
        name: "$name"
      },
      total: { $sum: "$score" }
    }
  }
])