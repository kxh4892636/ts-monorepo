import { Router } from 'express'
import { testController } from '../controller/test.service.controller'
import { testMiddleware } from '../middlleware/test.middleware'

export const testRoute = Router()

// /**
//  * @swagger
//  * /test:
//  *   get:
//  *      description: test
//  *      tags: [Test]
//  *      produces:
//  *          - application/json
//  *      parameters:
//  *          - name: test
//  *            description: test
//  *            in: json
//  *            required: true
//  *            type: string
//  *      responses:
//  *          200:
//  *              description: success
//  *              schema:
//  *                  type: string
//  *                  properties:
//  */
testRoute.use(testMiddleware.test, testController.test)
