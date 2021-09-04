
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const role = this.reflector.get('role', ctx.getHandler());
    return {req: ctx.getContext().req, role};
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const {req, role} = this.getRequest(context);
    return req.user && req.user.role === role || req.user.role == 'SUPER-ADMIN';
  }
}
