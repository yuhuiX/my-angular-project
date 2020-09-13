import {
  InitialReturnRequest,
  ReturnRequest,
} from './return-requests.interfaces';
import { Test, TestingModule } from '@nestjs/testing';

import { AuthService } from '../auth/auth.service';
import { CanActivate } from '@nestjs/common';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { ReturnRequestsController } from './return-requests.controller';
import { ReturnRequestsService } from './return-requests.service';
import { UsersService } from '../users/users.service';

describe('ReturnRequests Controller', () => {
  let returnRequestsController: ReturnRequestsController;
  let returnRequestsService: ReturnRequestsService;

  describe('createReturnRequest()', () => {
    let createdReturnRequest: ReturnRequest;
    let initialReturnRequest: InitialReturnRequest;
    let returnRequest: ReturnRequest;

    beforeEach(async () => {
      await initModule({ isUserAuthenticated: true });

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

  async function initModule({
    isUserAuthenticated,
  }: {
    isUserAuthenticated: boolean;
  }): Promise<void> {
    const mockedLocalAuthGuard: CanActivate = {
      canActivate: jest.fn(() => isUserAuthenticated),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReturnRequestsController],
      providers: [AuthService, ReturnRequestsService, UsersService],
    })
      .overrideGuard(LocalAuthGuard)
      .useValue(mockedLocalAuthGuard)
      .compile();

    returnRequestsController = module.get<ReturnRequestsController>(
      ReturnRequestsController,
    );
    returnRequestsService = module.get<ReturnRequestsService>(
      ReturnRequestsService,
    );
  }
});
