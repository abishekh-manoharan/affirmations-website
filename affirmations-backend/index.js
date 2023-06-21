const express = require('express')
const app = express()

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

app.get('/', (req, res) => {
    res.json(affirmations)
})

const PORT = 3001
app.listen(PORT)
console.log('starting server at port' + PORT)
