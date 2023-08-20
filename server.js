import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.use('/api', async (req,res)=> {
    console.log(`http://jservice.io/api${req.url}`)
    try {
        const apiResponse = await fetch(`http://jservice.io/api${req.url}`)
        const data = await apiResponse.json()
        res.send(data)
    } catch(err) {
        res.status(500).send('Error fetching data from the jservice api.')
    }
})

const PORT = 5500

app.listen(PORT, ()=>{
    console.log(`Service is running on http://localhost:${PORT}`)
})