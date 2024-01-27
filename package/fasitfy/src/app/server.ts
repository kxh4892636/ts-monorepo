import cors from '@fastify/cors'
import formbody from '@fastify/formbody'
import helmet from '@fastify/helmet'
import multipart from '@fastify/multipart'
import { fastify, FastifyInstance } from 'fastify'
import { testRoutes } from './test.route'

const initializeMiddleware = (app: FastifyInstance) => {
  // cors
  app.register(cors)
  // helmet
  app.register(helmet)
  // parse application/x-www-form-urlencoded
  app.register(formbody)
  // parse multipart/*
  app.register(multipart)
}

const initializeRoutes = (app: FastifyInstance) => {
  app.register(testRoutes)
}

const startApp = async (app: FastifyInstance, port: number) => {
  try {
    await app.listen({ port })
    if (process.env.NODE_ENV === 'production') {
      console.log('production')
    } else {
      process.env.NODE_ENV = 'development'
      console.log('development')
    }
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

export const createApp = async (port: number) => {
  const app = fastify({
    logger: true,
  })
  initializeMiddleware(app)
  initializeRoutes(app)

  return {
    start: () => {
      startApp(app, port)
    },
  }
}
