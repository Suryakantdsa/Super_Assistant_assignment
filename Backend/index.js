const express=require("express")
const app =express()
const cors=require("cors")
const mongoose=require("mongoose")

const Form=require("./Models/form")

const uri="mongodb+srv://Suryakant:Suryadas@cluster0.mydbwj6.mongodb.net/FormBuilder?retryWrites=true&w=majority"


mongoose.connect(uri)
.then(()=>{console.log("connected to db successfully")})

app.use(express.json())
app.use(cors())


app.post("/", async (req, resp) => {
    try {
        let newTask = new Form(req.body)
        let result = await newTask.save();
        resp.send(result)
        
    }
    catch {
        resp.status(400).json({ message: "something wrong" })
    }
})

app.get("/", async (req, resp) => {
    try {
        let form = await Form.find();
        if (!form) {
            resp.send(form)
            console.log(form)
        }
        else {
            resp.send({ result: "no formdata found" })
        }
    }

    catch {
        resp.status(400).json({ message: "no products found" })
    }
})



app.listen(5000,()=>{console.log("app is running on port5000")})
