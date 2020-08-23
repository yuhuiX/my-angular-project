import { Test, TestingModule } from '@nestjs/testing';

import { ReturnRequest } from './return-requests.interfaces';
import { ReturnRequestsService } from './return-requests.service';

describe('ReturnRequestsService', () => {
  let returnRequestsService: ReturnRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReturnRequestsService],
    }).compile();

    returnRequestsService = module.get<ReturnRequestsService>(
      ReturnRequestsService,
    );
  });

  describe('createReturnRequest()', () => {
    describe('if only customerEmail is provided', () => {
      let returnRequest: ReturnRequest;

      beforeEach(() => {
        returnRequest = returnRequestsService.createReturnRequest({
          customerEmail: 'abc@localhost.com',
        });
      });

      it('the "id" should be "a"', () => {
        expect(returnRequest.id).toBe('a');
      });

      it('the "customerEmail" should be the provided customerEmail', () => {
        expect(returnRequest.customerEmail).toBe('abc@localhost.com');
      });

      it('the "customerFullName" should be an empty string', () => {
        expect(returnRequest.customerFullName).toBe('');
      });

      it('the "devices" should be an empty array', () => {
        expect(returnRequest.devices).toEqual([]);
      });
    });

    describe('if both customerEmail and customerFullName are provided', () => {
      let returnRequest: ReturnRequest;

      beforeEach(() => {
        returnRequest = returnRequestsService.createReturnRequest({
          customerEmail: 'abc@localhost.com',
          customerFullName: 'Test Tester',
        });
      });

      it('the "id" should be "a"', () => {
        expect(returnRequest.id).toBe('a');
      });

      it('the "customerEmail" should be the provided customerEmail', () => {
        expect(returnRequest.customerEmail).toBe('abc@localhost.com');
      });

      it('the "customerFullName" should be the provided customerFullName', () => {
        expect(returnRequest.customerFullName).toBe('Test Tester');
      });

      it('the "devices" should be an empty array', () => {
        expect(returnRequest.devices).toEqual([]);
      });
    });
  });
});
