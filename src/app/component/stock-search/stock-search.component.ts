import { Component, OnInit } from '@angular/core';

export interface StockDetail {
  stockId: number;
  stcokPrice: string;
  date: string;
  time: string;
  
}

const ELEMENT_DATA: StockDetail[] = [
  {stockId: 1, stcokPrice: 'Relinace Inc', date: '12/11/2019', time: '2:40'},
  {stockId: 2, stcokPrice: 'Reliance Pharma', date: '12/09/2021', time: '1:10'},
  
];


@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css']
 // encapsulation: ViewEncapsulation.None
})
export class StockSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['stcokPrice', 'date', 'time'];
  dataSource = ELEMENT_DATA;
  
}
