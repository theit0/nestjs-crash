import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ExampleMiddlewareMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("Hi! Im example middleware")
    next();
  }
}
