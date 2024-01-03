import cors from 'cors'
import express, { Express, json, urlencoded } from 'express'
import helmet from 'helmet'
import { testRoute } from '../test/test.route'
import { errorHandle } from './error'

const initializeMiddleware = (app: Express) => {
  // cors
  app.use(cors())
  // helmet
  app.use(helmet())
  // parse application/x-www-form-urlencoded
  app.use(urlencoded({ extended: false }))
  // parse application/json
  app.use(json())
}

const initializeRoutes = (app: Express) => {
  app.use('/test', testRoute)
}

const initializeErrorHandle = (app: Express) => {
  app.use(errorHandle)
}

const appListen = (app: Express, port: number) => {
  app.listen(port, () => {
    if (process.env.NODE_ENV === 'production') {
      console.log('production')
    } else {
      process.env.NODE_ENV = 'development'
      console.log('development')
    }
  })
}

export const createApp = (port: number) => {
  const app = express()
  initializeMiddleware(app)
  initializeRoutes(app)
  initializeErrorHandle(app)

  return {
    listen: () => {
      appListen(app, port)
    },
  }
}
