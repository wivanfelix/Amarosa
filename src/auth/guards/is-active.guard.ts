import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PayloadToken } from '../models/token.model';
import { AuthService } from '../services/auth.service';

@Injectable()
export class IsActiveGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user as PayloadToken;
    return this.authService.isActive(user);
  }
}
