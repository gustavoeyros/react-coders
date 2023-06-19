import bodyParser from 'body-parser'
import express from 'express'
import TodoRoutes from './routes'

const port = 3003
const app = express()

app.use('/api', TodoRoutes)
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.listen(port, ()=> console.log("Running! :)"))

