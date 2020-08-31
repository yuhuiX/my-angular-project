import { AuthService } from 'src/auth/auth.service';
import { Module } from '@nestjs/common';
import { ReturnRequestsController } from './return-requests.controller';
import { ReturnRequestsService } from './return-requests.service';
import { UsersService } from 'src/users/users.service';

@Module({
  providers: [ReturnRequestsService, AuthService, UsersService],
  controllers: [ReturnRequestsController],
})
export class ReturnRequestsModule {}
