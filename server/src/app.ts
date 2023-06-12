/*
 * @file: server index.ts
 * @Author: xiaohan kong
 * @Date: 2023-02-24
 * @LastEditors: xiaohan kong
 * @LastEditTime: 2023-02-24
 *
 * Copyright (c) 2023 by xiaohan kong, All Rights Reserved.
 */
import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import formbody from "@fastify/formbody";



const fastify = Fastify({
  logger: true,
});
await fastify.register(cors);
await fastify.register(helmet);
await fastify.register(formbody);

fastify.get("/", async () => {
  return "Hello, world!";
});

fastify.post("/test", async (req) => {
  console.log(req.body);
  return "post success";
});

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 6789 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
