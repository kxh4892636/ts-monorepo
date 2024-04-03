import { FastifyTypebox } from '@/type'
import fp from 'fastify-plugin'

export const globalErrorHandler = fp(async (app: FastifyTypebox) => {
  app.setErrorHandler((error, req, res) => {
    console.log(error, req, res)
  })
})
