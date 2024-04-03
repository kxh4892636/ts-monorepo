import {
  Static,
  Type,
  TypeBoxTypeProvider,
} from '@fastify/type-provider-typebox'
import {
  FastifyBaseLogger,
  FastifyInstance,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
} from 'fastify'

export interface ResponseInterface<T> {
  status: 'success' | 'error'
  message: string
  data: T
}

export type FastifyTypebox = FastifyInstance<
  RawServerDefault,
  RawRequestDefaultExpression<RawServerDefault>,
  RawReplyDefaultExpression<RawServerDefault>,
  FastifyBaseLogger,
  TypeBoxTypeProvider
>

export const DBStatusSchema = Type.Union([
  Type.Literal('valid'),
  Type.Literal('pending'),
  Type.Literal('expire'),
])
export type DBStatusType = Static<typeof DBStatusSchema>
