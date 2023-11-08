import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { StockListJSONService } from './stock-list-json.service';

describe('StockListJSONService', () => {
  let service: StockListJSONService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(StockListJSONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
