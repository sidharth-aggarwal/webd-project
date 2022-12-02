const { default: mongoose, model } = require("mongoose");
const internal = require("stream");
const { isInt16Array } = require("util/types");


let schema = mongoose.Schema({
    id: {type:Number,required:true,unique:true},
    header: {type:String,required:true},
    title: {type:String,required:true},
    title2: {type:String,required:true}

})

let moviedetails = new mongoose.model("moviedetails",schema)

saveDoc=()=>{
    let p1= new moviedetails({
        id: 5,
        header:"AVENGERS",
        title:"Avengers",
        title2:"About Cast"
    })
    let p2= new moviedetails({
        id: 6,
        header:"RAMPAGE",
        title:"Rampage",
        title2:"About Cast"
    })
    let p3= new moviedetails({
        id: 9,
        header:"OBL",
        title:"Obl",
        title2:"About Cast"
    })
    let p4=new moviedetails({
        id:10,
        header: "webdassignment",
        title:"webd",
        title2: "About Cast"
    })

}
saveDoc()

module.exports=saveDoc