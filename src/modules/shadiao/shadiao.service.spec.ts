import { Test, TestingModule } from '@nestjs/testing';
import { ShadiaoService } from './shadiao.service';

describe('ShadiaoService', () => {
  let service: ShadiaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShadiaoService],
    }).compile();

    service = module.get<ShadiaoService>(ShadiaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
