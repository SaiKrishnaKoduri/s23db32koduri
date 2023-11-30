const mongoose = require("mongoose")
const bikeSchema = mongoose.Schema({
bike_name: String,
bike_mielage: { type: Number,
    min: 10,
    max: 100,
},
    bike_maker: { type: String,
        minlength: 0,
        maxlength: 15,
    },
    bike_year: Number
})
module.exports = mongoose.model("Bike", bikeSchema)