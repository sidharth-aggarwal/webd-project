let express =  require("express")
let path = require("path")
let hbs = require("hbs")
let app = express()
let ConnectDB = require("../connection/connectdb")

app.set("view engine","hbs")


app.use(express.static(path.join(__dirname,"../Public")));
let regex = /\w/
app.get("/",(req,res)=>{
    res.render("mainpage")
})
app.get("/mainpage",(req,res)=>{
    res.render("mainpage")
})
app.get("/booking",(req,res)=>{
    res.render("booking")
})
app.get("/playpage",(req,res)=>{
    res.render("playpage")
})
app.get("/aboutus",(req,res)=>{
    res.render("aboutus")
})
app.get(regex,(req,res)=>{
    res.render("error")
})


app.set("views",path.join(__dirname,"../Templates/views"))
hbs.registerPartials(path.join(__dirname,"../Templates/partials"))

ConnectDB()

app.listen("3000",()=>{
    console.log("Server is Connected")
    // console.log(__dirname)
    // let file = path.join(__dirname,"about.html")
    // console.log(file)
})

let saveDoc=require("../model/model1")
saveDoc()