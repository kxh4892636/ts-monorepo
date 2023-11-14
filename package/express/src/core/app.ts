import cors from 'cors'
import express, { json, urlencoded } from 'express'
import helmet from 'helmet'
import { testRoute } from '../test/test.route'
import { errorHandle } from './error'

// NOTE
export class App {
  private app: express.Application
  private port = 1234

  constructor() {
    this.app = express()
    this.initializeMiddleware()
    this.initializeRoutes()
    this.initializeSwagger()
    this.initializeErrorHandle()
  }

  private initializeMiddleware() {
    // cors
    this.app.use(cors())
    // helmet
    this.app.use(helmet())
    // parse application/x-www-form-urlencoded
    this.app.use(urlencoded({ extended: false }))
    // parse application/json
    this.app.use(json())
  }

  private initializeRoutes() {
    this.app.use('/test', testRoute)
  }

  private initializeSwagger() {
    const options = {
      definition: {
        openapi: '3.0.0',
        info: {
          title: 'express-demo',
          version: '1.0.0',
        },
      },
      apis: ['./src/route/*route*'],
    }
    const swaggerSpec = swaggerJSDoc(options)
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  }

  private initializeErrorHandle() {
    this.app.use(errorHandle)
  }

  public listen() {
    this.app.listen(this.port, () => {
      if (process.env.NODE_ENV === 'production') {
        console.log('production')
      } else {
        process.env.NODE_ENV = 'development'
        console.log('development')
      }
    })
  }
}
