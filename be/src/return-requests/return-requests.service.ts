import {
  InitialReturnRequest,
  ReturnRequest,
} from './return-requests.interfaces';

import { Injectable } from '@nestjs/common';

@Injectable()
export class ReturnRequestsService {
  createReturnRequest({
    customerEmail,
    customerFullName = '',
  }: InitialReturnRequest): ReturnRequest {
    return {
      id: 'a', // TODO
      customerEmail,
      customerFullName,
      devices: [],
    };
  }
}
