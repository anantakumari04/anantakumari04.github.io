import express from 'express';

const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

app.listen(8080, () => {
    console.log("Server started on port 8080");
});


//it is a middleware
const logger = (req,res,next) =>{

    req.msg = "Hello";
    next();  //it will go to next functionn dusre function me bhejne k liye next chhaiye
}

// app.use(logger); //use means first it then go to logger function and executes it and on next it go to next function i.e app.get

app.get("/",(req,res)=>{
    res.send(req.msg+"World")
})

// app.get("/products", ( req,res)=>{
//     res.send(req.msg+" Products")
// })
app.get("/products", logger, ( req,res)=>{
    res.send(req.msg+" Products")        // agr app.use nhi krenge to phle logger jaega execute krega then req, res but baar baar
                                        // na likhna pre isiliye app.use krte h means execute before app the apis
})



const auth =(req,res,next)=>{

    const name = req.params.name
    if(name==="John"){
        next()
    }
    else{
        res.send("Access Denied")
    }

}



app.get("/:name", auth,(req,res)=>{  //jo bhi para pass krr rhe h wo middle ware acces kr skta h
   res.send("Hello World") //john hoga tbhi  hello world print hoga

})
