import { AreUserCredentialsValidOptions } from './auth.interfaces';
import { Injectable } from '@nestjs/common';
import { User } from '../users/users.interfaces';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  areUserCredentialsValid({
    username,
    password,
  }: AreUserCredentialsValidOptions): boolean {
    const user: User = this.usersService.findUser(username);

    return user && user.password === password;
  }
}
