import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root page', () => {
    it('should return "Welcome to the return request backend"', () => {
      expect(appController.getPage()).toBe(
        'Welcome to the return request backend',
      );
    });
  });
});
