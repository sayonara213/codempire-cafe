import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UserRole } from '../../user/entity/user.entity';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  matchRoles(roles: UserRole[], userRole: UserRole): boolean {
    const result = roles.some((role) => role === userRole);
    return result;
  }
  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<UserRole[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return this.matchRoles(roles, user.role);
  }
}
