import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  loadBackendIndex(): string {
    return 'Welcome to the return request backend';
  }
}
