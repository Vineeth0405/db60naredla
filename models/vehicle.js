const mongoose = require("mongoose") 
const vehicleSchema = mongoose.Schema({ 
 name: String, 
 fuel: String, 
 wheels: Number 
}) 
 
module.exports = mongoose.model("Vehicle", 
vehicleSchema) 