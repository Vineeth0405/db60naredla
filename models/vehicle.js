const mongoose = require("mongoose") 
const vehicleSchema = mongoose.Schema({ 
 name: {
     type: String,
     minlength: 3,
 },
 fuel: String, 
 wheels: {
     type: Number,
     min: 2,
     max: 6
 } 
}) 
 
module.exports = mongoose.model("Vehicle", 
vehicleSchema) 