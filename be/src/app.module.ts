import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { ReturnRequestsModule } from './return-requests/return-requests.module';
import { UsersModule } from './users/users.module';
import { SkusModule } from './skus/skus.module';

@Module({
  imports: [AuthModule, ReturnRequestsModule, UsersModule, SkusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
