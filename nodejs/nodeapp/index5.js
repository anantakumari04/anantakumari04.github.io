import express from 'express'

const app = express()

app.listen(8080,()=>{
 console.log("Server Started")
})

//localhost:8080/?name=john ->access through req.queryc

app.use(express.json())  //reading the body from server

let products=[]

app.post("/",(req,res)=>{
    const {id,name,price} = req.body   // ab sirf id name price hi add krenge products arr me
    const obj = {
        id,
        name,
        price,
    };
    // products.push(req.body)
     products.push(obj)
   res.json({message: "Product created"});
})

app.get("/",(req,res)=>{
    res.json(products);
})

app.delete("/:id",(req,res)=>{


    const id = req.params.id

    products = products.filter((product)=>product.id != id)  //wo id chor kr sb id store ho jaega

    res.json("Product Deleted")

    // res.json(products);

})

