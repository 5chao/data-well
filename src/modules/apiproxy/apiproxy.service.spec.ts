import { Test, TestingModule } from '@nestjs/testing';
import { ApiproxyService } from './apiproxy.service';

describe('ApiproxyService', () => {
  let service: ApiproxyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiproxyService],
    }).compile();

    service = module.get<ApiproxyService>(ApiproxyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
