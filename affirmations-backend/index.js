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
app.post('/affirmations', (req, res) => {
    
    // getting unique id by getting the highest affirmationID then adding 1 to it
    const affirmationID = Math.max(...affirmations.map(e=>e.affirmationID))+1
    // creating new affirmation with updated id    
    const newAffirmation = {
        ...req.body, 
        affirmationID: affirmationID
    }
    // updating set quantity
    sets = sets.map(set => { 
        if(set.setID===req.body.setID){
            return {...set, "Quantity": set.Quantity+1}
        }
        else {
            return set
        }
    })

    affirmations.push(newAffirmation)

    res.json(newAffirmation)
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
    const id = Number(req.params.id)
    console.log('id:'+id);
    affirmations = affirmations.filter((e)=>{
        console.log('e.affirmationID:'+e.affirmationID);        
        return e.affirmationID!=id}
    )
    
    console.log('after delete:'+affirmations);
    res.json(affirmations)
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
    console.log('put request to /sets for set with id:'+req.body.setID)
    console.log('body: '+req.body)
    const setID = req.body.setID

    sets = sets.map(e=>{
        if(e.setID===setID) { 
            return req.body
        }
        else {
            return e
        }
    })

    res.json(sets)
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
