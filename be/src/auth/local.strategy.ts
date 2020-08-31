import { Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthService } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  validate(username: string, password: string): void {
    const userCredentialsValid: boolean = this.authService.areUserCredentialsValid(
      {
        username,
        password,
      },
    );

    if (!userCredentialsValid) {
      throw new UnauthorizedException();
    }
  }
}
