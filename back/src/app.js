import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()
import cors from 'cors'
import { createNewAction, AccountOperations } from './mongoDb.js'
mongoose.set('strictQuery', true)

mongoose.connect(process.env.MONGODB_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const app = express()
app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Credentials', true)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
app.use(
  cors({
    origin: 'http://localhost:4200',
  })
)

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', (error) => console.log('Connection Is open to mongoDB Server'))

app.get('/actions', async (req, res) => {
  const accountOperations = await AccountOperations.find()
  try {
    res.send(accountOperations)
  } catch (error) {
    res.status(500)
    console.log(res.status)
  }
})

app.post('/new', async (req, res) => {
  const { accountNo, action, amount, payments, rate } = req.body.data
  const newAction = await createNewAction(
    accountNo,
    action,
    amount,
    payments,
    rate
  )
  try {
    res.send('Action added successfully')
  } catch (error) {
    res.status(500)
  }
})

app.post('/find', async (req, res) => { 
  const accountNo  = req.body.data
  const accountOperations = await AccountOperations.find(accountNo)
  try {
    res.send(accountOperations)
  } catch (error) {
    res.status(500)
    console.log(res.status)
  }
})

app.listen(process.env.APP_PORT, () =>
  console.log(`server is listening on port ${process.env.APP_PORT}`)
)
