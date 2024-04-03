import { FastifyTypebox } from '@/type'
import { Type } from '@sinclair/typebox'

const ModelInfoQueryStringSchema = Type.Any()
const ModelInfoResponseSchema = Type.String()

export const modelRoute = async (app: FastifyTypebox) => {
  app.route({
    method: 'get',
    url: '/',
    schema: {
      tags: ['model'],
      querystring: ModelInfoQueryStringSchema,
      response: {
        200: ModelInfoResponseSchema,
      },
    },
    handler: async () => {
      const response = 'Hello world!'
      return response
    },
  })
}
