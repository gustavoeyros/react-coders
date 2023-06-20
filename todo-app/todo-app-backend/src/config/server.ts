import bodyParser from 'body-parser'
import express from 'express'
import TodoRoutes from './routes'
import cors from 'cors'

const port = 3003
const app = express()

app.use('/api', TodoRoutes)
app.use(bodyParser.json())
app.use(cors())
app.listen(port, ()=> console.log("Running! :)"))

