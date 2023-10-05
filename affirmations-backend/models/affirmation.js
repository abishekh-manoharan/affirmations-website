const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{console.log('connected to mongo');})
    .catch((err)=>{console.log('error connecting to mongodb: '+err.message);})

const affirmationSchema = new mongoose.Schema({
    "userID": mongoose.Schema.Types.ObjectId,
    "setID": mongoose.Schema.Types.ObjectId,
    "content": String,
    "author": String,
})

affirmationSchema.set('toJSON', {
    transform: (doc, returnedObj)=>{
        returnedObj.id = returnedObj._id.toString()
        delete returnedObj._id
        delete returnedObj.__v
    }
})

module.exports = mongoose.model('Affirmation', affirmationSchema)
