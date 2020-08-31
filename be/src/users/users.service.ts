import { Injectable } from '@nestjs/common';
import { User } from './users.interfaces';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: '1',
        username: 'bob',
        password: 'haha',
      },
      {
        userId: '2',
        username: 'kid',
        password: 'secret',
      },
    ];
  }

  findUser(username: string): User | undefined {
    return this.users.find(user => user.username === username);
  }
}
