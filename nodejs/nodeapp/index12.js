import express from 'express'
import userRouter from './userRoute.js';  //difference isi file me chahiye kyuki ye varible h pass ho rha h jus like argu
import productRouter from './productRoute.js';


const app = express();


// const userRouter = express.Router()

// const productRouter = express.Router()


app.listen(8080,(req,res)=>{
    console.log("Server Started")
})

// app.get("/api/users/show",(req,res)=>{
//     res.send("Show User")
// })

// userRouter.get("/show",(req,res)=>{
//     res.send("Show User")
// })



// userRouter.post("/register",(req,res)=>{
//     res.send("Register")
// })

// userRouter.post("/login",(req,res)=>{
//     res.send("Login Sucess")
// })


// productRouter.get("/show",(req,res)=>{
//     res.send("Show Products")
// })

// productRouter.delete("/:id",(req,res)=>{
//     res.send("Delete product 1")
// })
//in sbko module me divide kr do

app.use("/api/users",userRouter)
app.use("/api/products",productRouter)