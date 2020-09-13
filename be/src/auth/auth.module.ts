import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalAuthGuard],
})
export class AuthModule {}
