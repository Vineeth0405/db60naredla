const mongoose = require("mongoose") 
const vehicleSchema = mongoose.Schema({ 
 name: {
     type: String,
     minlength: 3,
 },
 fuel: String, 
 wheels: Number 
}) 
 
module.exports = mongoose.model("Vehicle", 
vehicleSchema) 