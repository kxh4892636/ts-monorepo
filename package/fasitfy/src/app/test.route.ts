import { FastifyInstance } from 'fastify'

export const testRoutes = (app: FastifyInstance) => {
  app.route({
    method: 'get',
    url: '/test',
    handler: async () => {
      return 'Hello World!'
    },
  })
}
