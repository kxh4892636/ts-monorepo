import cors from 'cors'
import * as dotenv from 'dotenv'
import express, { json, urlencoded } from 'express'
import helmet from 'helmet'

dotenv.config()

const app = express()
const port = 4321

// cors
app.use(cors())
// helmet
app.use(helmet())
// parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: false }))
// parse application/json
app.use(json())
// Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log('4321')
  console.log(process.env.TEST)
})
