// import express from 'express'

// const app = express()

// app.listen(8080,()=>{
//     console.log("Server Started")
// })

// app.use(express.json())

// const users=[];


// // const auth =(req,res,next)=>{

// //     if(req.header.authorization !== ""){

// //         res.json({message:"Inavlid Token"});

// //     }
// //     else{
// //         next();
// //     }

    

// // }

// // app.use(auth);

// app.get("/",(req,res)=>{
//     res.json(users);
// })

// app.post("/register",(req,res)=>{
//     const {email,password} = req.body
//     const obj = {
//         email,
//         password,
//     };

//     users.push(obj);
//     res.send("Users added");
// })

// const auth = (req,res,next)=>{
//     const {email, password} = req.params

//     const us = users.find((user)=>user.email === email && user.password === password)

//     if(us)
//         next();
//     else
//     res.send("Acess Denied")

// }


// app.post("/login/:email/:password",auth, (req,res)=>{
//     res.send("Login success");
// })



import express from "express";
const app = express();
app.listen(8080);
app.use(express.json());
let users = [];

const auth = (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.json({ message: "Invalid Token" });
  }
};

app.get("/", auth, (req, res) => {
  res.json(users);
});
app.post("/register", (req, res) => {
  users.push(req.body);
  res.json({ message: "User Registered" });
});
app.post("/login", (req, res) => {
  const { email, pass } = req.body;
  const found = users.find(
    (user) => user.email === email && user.pass === pass
  );
  if (found) {
    res.json({ message: "Welcome" });
  } else {
    res.json({ message: "Access Denied" });
  }
});
