import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public isadditemenabled:boolean=false;
  blankobject:ProductItem={
    item:"",
    rate:"",
    poQty:0,
    hsnCode:undefined,
    taxPercentage:0,
    taxInEx:"",
    discount:0,
    rateindicator:"",
    unit:0
  }
  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = [
    "item",
    "rate",
    "poQty",
    "hsnCode",
    "taxPercentage",
    "taxInEx",
    "discount",
    "rateindicator",
    "unit",
    "action",
  ];
  addItemenable()
  {
    this.dataSource.data.push(Object.assign({},this.blankobject) );
    this.isadditemenabled=true;
  }
  addItemtolist()
  {
    alert('not implemented');
  }
  dataSource: MatTableDataSource<ProductItem> = new MatTableDataSource([]);
  
  addItem(){
    //this.dataSource.data.push(Object.assign({},this.blankobject));
    let temp = this.dataSource.data;
    temp.push(Object.assign({}, this.blankobject));
    this.dataSource.data = temp;
    console.log(this.dataSource.data);
  }
}
export interface ProductItem{
  item:string,
  rate:string,
  poQty:number,
  hsnCode:number,
  taxPercentage:number,
  taxInEx:string,
  discount:number,
  rateindicator:string,
  unit:number
}

