const express = require('express')
const cors = require('cors')

const app = express() // initializing express app

// Middleware
app.use(express.json()) // JSON parser
app.use(cors())

let affirmations = [
    {
        "userID": 1,
        "affirmationID": 1,
        "setID": 1,
        "content": "An eye for an eye makes the whole world blind.",
        "author": "Ghandi",
        "style": "default"
    },
    {
        "userID": 1,
        "affirmationID": 2,
        "setID": 1,
        "content": "Love is love.",
        "style": "default"
    },
    {
        "userID": 1,
        "affirmationID": 3,
        "setID": 1,
        "content": "Can't Stop",
        "author": "RHCP",
        "style": "default"
    },
    {
        "userID": 1,
        "affirmationID": 4,
        "setID": 2,
        "content": "The happiness of your life depends upon the quality of your thoughts.",
        "author": "Marcus Aurelius",
        "style": "default"
    }
]

let sets = [
    {
        "setID": 1,
        "Name": "Morning affirmations.",
        "Quantity": 2,
        "dateUpdated": "2012-04-23T18:25:43.511Z",
        "dateCreated": "2012-04-23T18:25:43.511Z",
        "wallpaperID": "1"
    },
    {
        "setID": 2,
        "Name": "Night-time affirmations",
        "Quantity": 1,
        "dateUpdated": "2012-04-23T18:25:43.511Z",
        "dateCreated": "2012-04-23T18:25:43.511Z",
        "wallpaperID": "2"
    }
]

/*
    CRUD for affirmations
*/
// get all affirmations 
app.get('/affirmations', (req, res) => {
    res.json(affirmations)
})
// get all affirmations of a set from a user
app.get('/affirmations/:uid/:setID', (req, res) => {
    const userId = Number(req.params.uid)
    const setID = Number(req.params.setID)

    const filteredAffirmations = affirmations.filter((a) => {
        // console.log('params uid: ' + userId)
        // console.log('params setid: ' + setID)
        // console.log(a.userID === userId && a.setID === setID)
        return a.userID === userId && a.setID === setID
    })

    console.log(filteredAffirmations);

    res.json(filteredAffirmations)
})
// add an affirmation
app.post('/affirmations', (req, res) => {
    console.log('post body: ')
    console.log(req.body);
    res.send(req.body)
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



/*
    CRUD for sets
*/
// get all sets
app.get('/sets', (req, res) => {
    res.json(sets)
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
