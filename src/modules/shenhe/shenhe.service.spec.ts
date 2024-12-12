import { Test, TestingModule } from '@nestjs/testing';
import { ShenHeService } from './shenhe.service';

describe('ShadiaoService', () => {
  let service: ShenHeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShenHeService],
    }).compile();

    service = module.get<ShenHeService>(ShenHeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
