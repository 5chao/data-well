import { Test, TestingModule } from '@nestjs/testing';
import { IpqueryController } from './ipquery.controller';
import { IpqueryService } from './ipquery.service';

describe('IpqueryController', () => {
  let controller: IpqueryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IpqueryController],
      providers: [IpqueryService],
    }).compile();

    controller = module.get<IpqueryController>(IpqueryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
