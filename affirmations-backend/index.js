require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express() // initializing express app
app.use(express.json()) // JSON parser
app.use(cors()) // allowing cross-origin resource sharing

const Affirmation = require('./models/affirmation')
const Set = require('./models/set')
/*
    CRUD for affirmations
*/
// get all affirmations 
app.get('/affirmations', (req, res,next) => {
    Affirmation.find({})
        .then(result=>res.json(result))
})
// get all affirmations of a set from a user
app.get('/affirmations/:uid/:setID', (req, res, next) => {
    const userId = Number(req.params.uid)
    const setId = req.params.setID

    Affirmation.find({userID: userId, setID: setId})
        .then(result=>res.json(result))
        .catch(err=>next(err))
})

// add an affirmation
app.post('/affirmations', (req, res, next) => {
    const affirmation = new Affirmation({
        "userID": req.body.userID,
        "setID": req.body.setID,
        "content": req.body.content,
        "author": req.body.author,
    })

    affirmation.save().then(result=>{
        res.json(result)
    }).catch(err=>next(err))
    

    //updating of set quantity
    Set.findById(req.body.setID).then(result=>{
        const updated = {
            _id: result.id,
            Name: result.Name,
            Quantity: result.Quantity+1,
            dateUpdated: result.dateUpdated,
            dateCreated: result.dateCreated,
            wallpaperID: result.wallpaperID
        }
        Set.findByIdAndUpdate(req.body.setID, updated).then(ress=>{
            console.log(ress);
        })
    })
})

// update an affirmation
app.put('/affirmations', (req,res)=>{
    const updatedAffirmation = req.body
    console.log(updatedAffirmation)
    affirmations = affirmations.map((e)=>{
        if(e.affirmationID===updatedAffirmation.affirmationID) {
            return updatedAffirmation
        }
        else {
            return e
        }
    })
    console.log('====================================');
    console.log(affirmations);
    console.log('====================================');

    res.send(updatedAffirmation)
})

// delete an affirmation
app.delete('/affirmations/:id', (req,res)=>{
    const id = req.params.id
    
    // delete affirmation from affirmations collection    
    Affirmation.findByIdAndDelete(id).then(result=>{
        if(result) {
            console.log('setID: '+result.setID);

            // update set quantity
            Set.findById(result.setID).then(set=>{
                const updated = {
                    _id: set.id,
                    Name: set.Name,
                    Quantity: set.Quantity-1,
                    dateUpdated: set.dateUpdated,
                    dateCreated: set.dateCreated,
                    wallpaperID: set.wallpaperID
                }
                Set.findByIdAndUpdate(result.setID, updated,{new:true}).then(ress=>{
                    console.log(ress);
                })
            })

            // return updated list of affirmations
            Affirmation.find({}).then(affirmations => res.json(affirmations)) 
        }         
    }).catch(err=>console.log(err.name))
    

})


/*
    CRUD for sets
*/
// get all sets
app.get('/sets', (req, res) => {
    Set.find({})
        .then(result=>res.json(result))
})
// add a new set
app.post('/sets', (req, res) => {
    console.log('post request to /sets')
    const set = req.body
    sets.push(set)
    res.json(set)
})
// update existing set
app.put('/sets', (req, res) => {
    const setID = req.body.id
    const updatedSet = {...req.body}

    Set.findByIdAndUpdate(setID, updatedSet).then(result=>{
        Set.find({}).then((sets => res.json(sets)))
    })
})
// delete a set
app.delete('/sets/:id', (req,res)=>{
    const id = req.params.id
    sets = sets.filter((set)=>set.setID!=id)
    res.json(sets)
})


const PORT = 3001
app.listen(PORT)
console.log('starting server at port' + PORT)
