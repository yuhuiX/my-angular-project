import { Controller, Post, Body } from '@nestjs/common';
import {
  InitialReturnRequest,
  ReturnRequest,
} from './return-requests.interfaces';
import { ReturnRequestsService } from './return-requests.service';

@Controller('returnRequests')
export class ReturnRequestsController {
  constructor(private readonly returnRequestService: ReturnRequestsService) {}

  @Post()
  createReturnRequest(
    @Body() initialReturnRequest: InitialReturnRequest,
  ): ReturnRequest {
    return this.returnRequestService.createReturnRequest(initialReturnRequest);
  }
}
