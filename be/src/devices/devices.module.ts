import { AuthService } from '../auth/auth.service';
import { DevicesController } from './devices.controller';
import { DevicesService } from './devices.service';
import { Module } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Module({
  controllers: [DevicesController],
  providers: [AuthService, DevicesService, UsersService],
})
export class DevicesModule {}
