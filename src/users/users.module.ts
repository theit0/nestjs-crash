import { MiddlewareConsumer, Module, NestModule, Post, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { ExampleMiddlewareMiddleware } from './middlewares/example_middleware/example_middleware.middleware';
import { AnotherMiddlewareMiddleware } from './middlewares/another_middleware/another_middleware.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/User.schema';
import { Settings, SettingsSchema } from 'src/schemas/Settings.schema';
import { PostSchema } from 'src/schemas/Post.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: User.name,
      schema: UserSchema
    }, {
      name: Settings.name,
      schema: SettingsSchema
    },
    {
      name: Post.name,
      schema: PostSchema
    }
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ExampleMiddlewareMiddleware)
      .forRoutes(
        {
          path: "users/:id",
          method: RequestMethod.GET
        }
      )
      .apply(AnotherMiddlewareMiddleware)
      .forRoutes({
        path: "users",
        method: RequestMethod.GET
      },
        {
          path: "users/:id",
          method: RequestMethod.GET
        }
      )
  }
}
