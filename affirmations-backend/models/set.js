const mongoose = require('mongoose')

const setSchema = new mongoose.Schema({
    Name: String,
    Quantity: Number,
    dateUpdated: Date,
    dateCreated: Date,
    wallpaperID: String,
})

setSchema.set('toJSON', {
    transform: (doc, returnedObj)=>{
        returnedObj.id = returnedObj._id.toString()
        delete returnedObj._id
        delete returnedObj.__v
    }
})
    
module.exports = mongoose.model('Set', setSchema)