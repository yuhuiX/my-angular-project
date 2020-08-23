import {
  InitialReturnRequest,
  ReturnRequest,
} from './return-requests.interfaces';
import { Test, TestingModule } from '@nestjs/testing';

import { ReturnRequestsController } from './return-requests.controller';
import { ReturnRequestsService } from './return-requests.service';

describe('ReturnRequests Controller', () => {
  let returnRequestsController: ReturnRequestsController;
  let returnRequestsService: ReturnRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReturnRequestsController],
      providers: [ReturnRequestsService],
    }).compile();

    returnRequestsController = module.get<ReturnRequestsController>(
      ReturnRequestsController,
    );
    returnRequestsService = module.get<ReturnRequestsService>(
      ReturnRequestsService,
    );
  });

  describe('createReturnRequest()', () => {
    let createdReturnRequest: ReturnRequest;
    let initialReturnRequest: InitialReturnRequest;
    let returnRequest: ReturnRequest;

    beforeEach(() => {
      initialReturnRequest = { customerEmail: 'abc@localhost.com' };

      returnRequest = {
        id: 'a',
        customerEmail: 'abc@localhost.com',
        customerFullName: 'Test Tester',
        devices: [],
      };

      jest
        .spyOn(returnRequestsService, 'createReturnRequest')
        .mockImplementation(() => returnRequest);

      createdReturnRequest = returnRequestsController.createReturnRequest(
        initialReturnRequest,
      );
    });

    it('should have called returnRequestsService.createReturnRequest() with the request body', () => {
      expect(returnRequestsService.createReturnRequest).toHaveBeenCalledWith(
        initialReturnRequest,
      );
    });

    it('should return the response from returnRequestsService.createReturnRequest()', () => {
      expect(createdReturnRequest).toBe(returnRequest);
    });
  });
});
