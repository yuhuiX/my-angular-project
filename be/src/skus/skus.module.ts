import { AuthService } from '../auth/auth.service';
import { Module } from '@nestjs/common';
import { SkusController } from './skus.controller';
import { SkusService } from './skus.service';
import { UsersService } from '../users/users.service';

@Module({
  controllers: [SkusController],
  providers: [AuthService, SkusService, UsersService],
})
export class SkusModule {}
