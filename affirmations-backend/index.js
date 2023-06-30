const express = require('express')
const app = express()
const cors = require('cors')

// Middleware
app.use(express.json())
app.use(cors())

const affirmations = [
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
        "setID": 2,
        "content": "The happiness of your life depends upon the quality of your thoughts.",
        "author": "Marcus Aurelius",
        "style": "default"
    }
]

const sets = [
    {
        "setID": 1,
        "Name": "For the morning",
        // "Name": "Set 1012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z 1012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z 1012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z 1012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z 1012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z 1012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z 1012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z012-04-23T18:25:43.511Z",
        "Description": "",
        "Quantity": 2,
        "dateUpdated": "2012-04-23T18:25:43.511Z"
    },
    {
        "setID": 2,
        "Name": "Quotes by the late, great, mohammed ali",
        "Description": "",
        "Quantity": 1,
        "dateUpdated": "2012-04-23T18:25:43.511Z"
    },
    {
        "setID": 3,
        "Name": "WWWWWWWWWW WWWWWWWWWW WWWWWWWWWW WWWWWWWWWW WWWWWWWWWW",
        "Description": "",
        "Quantity": 1,
        "dateUpdated": "2012-04-23T18:25:43.511Z"
    },
    {
        "setID": 4,
        "Name": "Set 2",
        "Description": "",
        "Quantity": 1,
        "dateUpdated": "2012-04-23T18:25:43.511Z"
    },
    {
        "setID": 5,
        "Name": "Set 2",
        "Description": "",
        "Quantity": 1,
        "dateUpdated": "2012-04-23T18:25:43.511Z"
    },
    {
        "setID": 5,
        "Name": "Set 2",
        "Description": "",
        "Quantity": 1,
        "dateUpdated": "2012-04-23T18:25:43.511Z"
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
app.get('/affirmations/:uid/:setID', (req,res)=>{
    const userId = Number(req.params.uid)
    const setID = Number(req.params.setID)

    const filteredAffirmations = affirmations.filter((a)=>{
        console.log('params uid: '+userId)
        console.log('params setid: '+setID)
        console.log(a.userID === userId && a.setID === setID)
        return a.userID === userId && a.setID === setID
    })    

    console.log(filteredAffirmations);

    res.json(filteredAffirmations)
})

// add an affirmation
app.post('/affirmations', (req,res)=> {
    console.log('post body: ')
    console.log(req.body);
    res.send(req.body)
})


/*
    CRUD for sets
*/
// get all sets
app.get('/sets', (req,res)=> {
    res.json(sets)
})


const PORT = 3001
app.listen(PORT)
console.log('starting server at port' + PORT)
