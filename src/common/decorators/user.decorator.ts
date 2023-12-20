import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';

export const User = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<Request>();
  console.log('from user.decorator', request.user);
  return request.user;
});

export interface UserAfterAuth {
  id: string;
}
