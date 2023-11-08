import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StocksType } from '../models/stock-list-json/stocks-type';

@Injectable({
  providedIn: 'root'
})
export class StockListJSONService {
  constructor(
    private http: HttpClient
  ) { }

  public getStocksList(): Observable<StocksType[]> {
    return this.http.get<StocksType[]>("https://excel2json.io/api/share/ff7012cd-a959-4fbb-4a6d-08db39d60f55");
  }
}
