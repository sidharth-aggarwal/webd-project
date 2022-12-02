let mongoose = require('mongoose')

let URI = "mongodb+srv://sidagg180:sidagg180@webproject.8vjndhh.mongodb.net/test"

let connectdb = async()=>{
    try{
        let con = await mongoose.connect(URI,
            {useUnifiedTopology:true,
            useNewUrlParser: true}
            )
            console.log("Database is Connected")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectdb