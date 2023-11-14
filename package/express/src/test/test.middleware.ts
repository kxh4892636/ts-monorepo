import { NextFunction, Request, Response } from 'express'

class TestMiddleware {
  async test(req: Request, res: Response, next: NextFunction) {
    try {
      next()
    } catch (error) {
      next(error)
    }
  }
}

export const testMiddleware = new TestMiddleware()
