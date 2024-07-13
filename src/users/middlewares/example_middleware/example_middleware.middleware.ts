import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Hi! Im example middleware")
    console.log(req.headers.authorization)
    const { authorization } = req.headers;

    if (!authorization) throw new HttpException('No authorization token', HttpStatus.FORBIDDEN)

    if (authorization === "exampletoken") {
      next();
    } else throw new HttpException('Invalid authorization token', HttpStatus.FORBIDDEN)

  }
}
