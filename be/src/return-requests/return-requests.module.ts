import { AuthService } from '../auth/auth.service';
import { Module } from '@nestjs/common';
import { ReturnRequestsController } from './return-requests.controller';
import { ReturnRequestsService } from './return-requests.service';
import { UsersService } from '../users/users.service';

@Module({
  providers: [AuthService, ReturnRequestsService, UsersService],
  controllers: [ReturnRequestsController],
})
export class ReturnRequestsModule {}
