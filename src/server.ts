import 'dotenv/config'
import express from 'express'
import UserController from './app/controllers/UserController'


const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.post('/users', UserController.store)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})