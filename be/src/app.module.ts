import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { ReturnRequestsModule } from './return-requests/return-requests.module';

@Module({
  imports: [ReturnRequestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
