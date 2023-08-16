import cors from 'cors'
import express, { json, urlencoded } from 'express'
import helmet from 'helmet'
import { errorHandle } from './error'

// NOTE
export class App {
  private app: express.Application
  private port = 1234

  constructor () {
    this.app = express()
    this.initializeMiddlewares()
    this.initializeRoutes()
    this.initializeSwagger()
    this.initializeErrorHandle()
  }

  private initializeMiddlewares () {
    // cors
    this.app.use(cors())
    // helmet
    this.app.use(helmet())
    // parse application/x-www-form-urlencoded
    this.app.use(urlencoded({ extended: false }))
    // parse application/json
    this.app.use(json())
  }

  private initializeRoutes () {
    this.app.use('/', (req, res) => {
      res.send('Hello World!')
    })
  }

  private initializeSwagger () {
    // this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
  }

  private initializeErrorHandle () {
    this.app.use(errorHandle)
  }

  public listen () {
    this.app.listen(this.port, () => {
      console.log('Server start!!!')
    })
  }
}

export default App
