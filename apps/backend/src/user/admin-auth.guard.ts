import { ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class AdminAuthGuard extends AuthGuard('jwt') {
   async canActivate(context: ExecutionContext) {
      const baseGuardResult = await super.canActivate(context)
      if(!baseGuardResult) {
         return false;
      }

      const request = context.switchToHttp().getRequest();
      const user = request.user;

      if (user && user.isAdmin === true) 
         return true;

      throw new ForbiddenException('Access granted to admin only');
   }
}