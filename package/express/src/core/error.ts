import { NextFunction, Request, Response } from 'express'

// NOTE express 错误处理
export const errorHandle = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(err)
  res.status(200).send(err)
  next()
}
