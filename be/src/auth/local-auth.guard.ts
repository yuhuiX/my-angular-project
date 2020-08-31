import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { AuthService } from './auth.service';

@Injectable()
export class LocalAuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest() as Request;

    const b64authToken: string =
      (request.headers['authorization'] || '').split(' ')[1] || '';
    const [username, password] = Buffer.from(b64authToken, 'base64')
      .toString()
      .split(':');

    return this.authService.areUserCredentialsValid({ username, password });
  }
}
