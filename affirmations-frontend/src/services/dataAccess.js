import axios from 'axios'

const URL = 'http://localhost:3001/'

const getAllSets = () => axios.get(URL+'sets').then(res=>{
    console.log('body:'+res.data)
    return res.data
})

export default {getAllSets}