import { NextFunction, Request, Response } from 'express'

const test = async (_req: Request, _res: Response, next: NextFunction) => {
  try {
    next()
  } catch (error) {
    next(error)
  }
}

export const testMiddleware = { test }
