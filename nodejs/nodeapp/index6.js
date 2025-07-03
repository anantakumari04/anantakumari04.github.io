import express from 'express'

const app = express()

app.listen(8080,()=>{
    console.log("Server Started")
})

app.use(express.json())

const users=[];


// const auth =(req,res,next)=>{

//     if(req.header.authorization !== ""){

//         res.json({message:"Inavlid Token"});

//     }
//     else{
//         next();
//     }

    

// }

// app.use(auth);

app.get("/",(req,res)=>{
    res.json(users);
})

app.post("/register",(req,res)=>{
    const {email,password} = req.body
    const obj = {
        email,
        password,
    };

    users.push(obj);
    res.send("Users added");
})

const auth = (req,res,next)=>{
    const {email, password} = req.params

    const us = users.find((user)=>user.email === email && user.password === password)

    if(us)
        next();
    else
    res.send("Acess Denied")

}


app.post("/login/:email/:password",auth, (req,res)=>{
    res.send("Login success");
})




