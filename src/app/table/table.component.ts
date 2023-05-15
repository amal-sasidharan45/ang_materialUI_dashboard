import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator:any;
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator
  }


}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'iphone', weight: 10079, symbol: 'Smartphone'},
  {position: 2, name: 'Ac', weight: 40026, symbol: 'Appliances'},
  {position: 3, name: 'fridge', weight: 6941, symbol: 'Appliances'},
  {position: 4, name: 'Tv', weight: 90122, symbol: 'Electronics'},
  {position: 5, name: 'Laptop', weight: 10811, symbol: 'Electronics'},
  {position: 6, name: 'Tab', weight: 120107, symbol: 'Electronics'},
  {position: 7, name: 'B.speaker', weight: 140067, symbol: 'Electronics'},
  {position: 8, name: 'iphone', weight: 159994, symbol: 'Smartphone'},
  {position: 9, name: 'AC', weight: 189984, symbol: 'Appliances'},
  {position: 10, name: 'Fridge', weight: 201797, symbol: 'Appliances'},
  {position: 11, name: 'Tv', weight: 229897, symbol: 'Appliances'},
  {position: 12, name: 'Laptop', weight: 24305, symbol: 'Electronics'},
  {position: 13, name: 'Tab', weight: 269815, symbol: 'Electronics'},
  {position: 14, name: 'Speaker', weight: 280855, symbol: 'Electronics'},
  {position: 15, name: 'Table', weight: 309738, symbol: 'Furniture'},
  {position: 16, name: 'Ac', weight: 32065, symbol: 'Appliances'},
  {position: 17, name: 'fridge', weight: 35453, symbol: 'Appliances'},
  {position: 18, name: 'AC', weight: 39948, symbol: 'Appliances'},
  {position: 19, name: 'speaker', weight: 390983, symbol: 'Electronics'},
  {position: 20, name: 'Computer', weight: 40078, symbol: 'Electronics'},
];