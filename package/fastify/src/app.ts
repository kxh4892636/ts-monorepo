/*
 * @file: server index.ts
 * @Author: XiaoHan Kong
 * @Date: 2023-02-24
 * @LastEditors: XiaoHan Kong
 * @LastEditTime: 2023-02-24
 *
 * Copyright (c) 2023 by XiaoHan Kong, All Rights Reserved.
 */
import cors from '@fastify/cors'
import formbody from '@fastify/formbody'
import helmet from '@fastify/helmet'
import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})
await fastify.register(cors)
await fastify.register(helmet)
await fastify.register(formbody)

fastify.get('/', async () => {
  return 'Hello, world!'
})

fastify.post('/test', async (req) => {
  console.log(req.body)
  return 'post success'
})

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 6789 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
