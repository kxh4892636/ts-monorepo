import { NextFunction, Request, Response } from 'express'

// NOTE express 错误处理
export const errorHandle = (err:Error, req:Request, res:Response, next:NextFunction) => {
  console.log(err)
  next()
}
