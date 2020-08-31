import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import {
  InitialReturnRequest,
  ReturnRequest,
} from './return-requests.interfaces';
import { ReturnRequestsService } from './return-requests.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@Controller('returnRequests')
export class ReturnRequestsController {
  constructor(private readonly returnRequestService: ReturnRequestsService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  createReturnRequest(
    @Body() initialReturnRequest: InitialReturnRequest,
  ): ReturnRequest {
    return this.returnRequestService.createReturnRequest(initialReturnRequest);
  }
}
