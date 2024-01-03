import { NextFunction, Request, Response } from 'express'
import { testService } from './test.service'

const test = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await testService.test()
    res.send(response)
  } catch (error) {
    next(error)
  }
}

export const testController = { test }
