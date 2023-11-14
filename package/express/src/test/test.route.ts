import { Router } from 'express'
import { testController } from './test.controller'
import { testMiddleware } from './test.middleware'

export const testRoute = Router()

testRoute.use(testMiddleware.test, testController.test)
