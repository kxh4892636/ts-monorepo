/* eslint-disable jsdoc/check-tag-names */
import { Router } from 'express'
import { testController } from '../controller/test.service.controller'
import { testMiddleware } from '../middlleware/test.middleware'

export const testRoute = Router()

/**
 * @swagger
 * /test:
 *   get:
 *      description: To Check the environment of node.
 *      tags: [Test]
 *      responses:
 *          "200":
 *              description: success
 *              type: string
 */
testRoute.use(testMiddleware.test, testController.test)
