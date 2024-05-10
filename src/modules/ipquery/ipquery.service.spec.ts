import { Test, TestingModule } from '@nestjs/testing';
import { IpqueryService } from './ipquery.service';

describe('IpqueryService', () => {
  let service: IpqueryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IpqueryService],
    }).compile();

    service = module.get<IpqueryService>(IpqueryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
