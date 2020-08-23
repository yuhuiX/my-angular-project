import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { ReturnRequestsController } from './return-requests/return-requests.controller';
import { ReturnRequestsService } from './return-requests/return-requests.service';

@Module({
  imports: [],
  controllers: [AppController, ReturnRequestsController],
  providers: [AppService, ReturnRequestsService],
})
export class AppModule {}
