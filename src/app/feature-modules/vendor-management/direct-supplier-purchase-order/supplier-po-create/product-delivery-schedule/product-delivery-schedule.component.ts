import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-delivery-schedule',
  templateUrl: './product-delivery-schedule.component.html',
  styleUrls: ['./product-delivery-schedule.component.css']
})
export class ProductDeliveryScheduleComponent implements OnInit {
  displayedColumns: string[] = [
    "deliveryItem",
    "deliveryDate",
    "deliveryQty",
    "deliveryComment",
    "action",
  ];
  dataSource: MatTableDataSource<PeriodicElement> = new MatTableDataSource([]);
  additionalData = {
    id: 0,
    deliveryItem: "",
    deliveryDate: "",
    deliveryQty: "",
    deliveryComment: "",
  };

  constructor() { }

  ngOnInit(): void {
  }
  
  isChangePricing(value: any, name: any) {
    this.additionalData[name] = value;
    if (name === "deliveryItem") {
      this.additionalData.id = this.additionalData.id + 1;
    }
  }
  isSubmitAdd() {
    let temp = this.dataSource.data;
    temp.push(Object.assign({}, this.additionalData));
    this.dataSource.data = temp;
    console.log(this.dataSource.data);
  }
}

export interface PeriodicElement {
  id: number;
  deliveryItem: any;
  deliveryDate: any;
  deliveryQty: any;
  deliveryComment: any;
}
