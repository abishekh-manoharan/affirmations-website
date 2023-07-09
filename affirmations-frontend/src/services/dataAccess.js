import axios from 'axios'

const URL = 'http://localhost:3001/'

const getAllSets = () => axios.get(URL+'sets').then(res=>{
    console.log('body:'+res.data)
    return res.data
})

const addSet = (set) => axios.post(URL+'sets', set).then(res=>console.log(`response: =----=${res}`))

const editSet = (set) => axios.put(URL+'sets', set)

const deleteSet = (id) => axios.delete(URL+'sets/'+id).then(res=>res.data)

export default {getAllSets, addSet, editSet, deleteSet}