//localfield means jo iska id h whi
//foreignid means ki wo value dusre table me kis naam se h
//as means kis naam se show hoga
//in unwind comments is a field so give dollar with it
db.posts.aggregate([
    {$lookup:{
        from:"comments",
        localField:"_id",
        foreignField:"pid",
        as:"comments"
        },
    },
    {$unwind:"$comments"},
    {$project:{_id:0,post:1,"comments.comment":1}}
])

db.comments.insertOne({
    _id: "c6",
        pid:"p1",
        comment: "Comment3"

})

db.marks.insertMany([
  {name:"John",
    term:"t1",
    subject:"maths",
    score:98
  },
    {name:"John",
    term:"t2",
    subject:"maths",
    score:90
  },
    {name:"John",
    term:"t3",
    subject:"maths",
    score:88
  },
    {name:"John",
    term:"t1",
    subject:"science",
    score:92
  },
    {name:"John",
    term:"t2",
    subject:"science",
    score:82
  },
    {name:"John",
    term:"t3",
    subject:"science",
    score:82
  },
    {name:"Cathly",
    term:"t1",
    subject:"maths",
    score:92
  },
      {name:"Cathly",
    term:"t2",
    subject:"maths",
    score:92
  },
      {name:"Cathly",
    term:"t3",
    subject:"maths",
    score:82
  },
        {name:"Cathly",
    term:"t1",
    subject:"science",
    score:92
  },
          {name:"Cathly",
    term:"t2",
    subject:"science",
    score:82
  },
          {name:"Cathly",
    term:"t3",
    subject:"science",
    score:80
  },
])


//name wise group so write in id
db.marks.aggregate([
    {$group:{_id:"$term",AvgScore:{$avg:"$score"}}},
    {$sort:{_id:1}} //otherwise in different order
])

db.marks.aggregate([
    {$group:{_id:"$subject",AvgScore:{$avg:"$score"}}},
    {$sort:{_id:1}}
])

//term wise grouping
db.marks.aggregate([
   
    {$group:{_id:{term:"$term",subject:"$subject"},AvgScore:{$avg:"$score"}}},
    {$sort:{_id:1}}
])
db.marks.aggregate([
   {$match:{name:"John"}},
    {$group:{_id:{term:"$term"},AvgScore:{$avg:"$score"}}},
    {$sort:{_id:1}}
])

db.marks.aggregate([
   {$match:{name:"John"}},
    {$group:{_id:{term:"$term",name:"$name"},AvgScore:{$avg:"$score"}}},
    {$sort:{_id:1}}
])

db.studentInfo.insertMany([
    {
        _id:"s1",
        name:"John"
    },
    {
        id:"s2",
        name:"Cathy"
    }
])


db.studentInfo.insertOne({_id:"s1", name:"John"});


db.marks.updateMany({},{$rename:{name:"sid"}})

db.marks.updateMany({sid:"John"},{$set:{sid:"s1"}})
db.marks.updateMany({sid:"Cathy"},{$set:{sid:"s2"}})

db.studentInfo.aggregate([
    {$lookup: {from:"marks",
        localField: "_id",
        foreignField: "sid",
        as: "marks"},
    },
    {$unwind:"$marks"},
    {$group:{_id:"$marks.term",
        AvgScore:{$avg:"$marks.score"}
    }}
])


//1 part is cond  secod true, third false
db.employees.aggregate([
  {$project:{_id:0,name:1, salary:1,Grade: {$cond:[{$gt:["$salary",3000]},"Grade A", "Grade B"]}}}
])


//out used to store in new collection
db.employees.aggregate([
  {
    $project:{
    _id:0,
      name:1,
       salary:1,
       Grade:{
        $cond:
        {
        if:{$gt:["$salary",3000]},
        then:"Grade A", 
        else:"Grade B"
      }}}
       },
       {$out:"GradeWiseSalary"}  //generate new collection
])


db.createView("viewname","collectionname",[query])  //model

//phle view delete krna h then modify krna h then change krna h

db.createView("salaryview","employees",[
  {
    $project:{
    _id:0,
      name:1,
      department:1,
       salary:1,
       Grade:{
        $cond:
        {
        if:{$gt:["$salary",3000]},
        then:"Grade A", 
        else:"Grade B"
      }}}
       },
       
])







