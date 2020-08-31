import { Module } from '@nestjs/common';
import { ReturnRequestsController } from './return-requests.controller';
import { ReturnRequestsService } from './return-requests.service';

@Module({
  providers: [ReturnRequestsService],
  controllers: [ReturnRequestsController],
})
export class ReturnRequestsModule {}
