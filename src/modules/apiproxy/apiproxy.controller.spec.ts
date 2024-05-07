import { Test, TestingModule } from '@nestjs/testing';
import { ApiproxyController } from './apiproxy.controller';
import { ApiproxyService } from './apiproxy.service';

describe('ApiproxyController', () => {
  let controller: ApiproxyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiproxyController],
      providers: [ApiproxyService],
    }).compile();

    controller = module.get<ApiproxyController>(ApiproxyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
