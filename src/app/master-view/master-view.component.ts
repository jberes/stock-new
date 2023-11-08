import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { StocksType } from '../models/stock-list-json/stocks-type';
import { StockListJSONService } from '../services/stock-list-json.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public stockListJSONStocks: StocksType[] = [];
  public columnVisible: boolean = false;

  constructor(
    private stockListJSONService: StockListJSONService,
  ) {}

  ngOnInit() {
    this.stockListJSONService.getStocksList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.stockListJSONStocks = data,
      error: (_err: any) => this.stockListJSONStocks = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
