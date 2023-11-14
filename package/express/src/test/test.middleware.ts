import { NextFunction, Request, Response } from 'express'

class TestMiddleware {
  async test(_req: Request, _res: Response, next: NextFunction) {
    try {
      next()
    } catch (error) {
      next(error)
    }
  }
}

export const testMiddleware = new TestMiddleware()
