import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs';
import { DirectSuppliePurchaseOrderService } from 'src/app/erp-services/vendor-management/direct-supplier-purchase-order/direct-supplier-order.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  _addcharges:number=0;
  @Input()
  productitems:any;
  totaladditionalcharges:number=0;

  get addCharges():number{
return this._addcharges;
  }
   set addCharges(value:number){
    this.addChargesItem(value);
    this._addcharges=value;
      }


@Input()
  poDDL:any;
  public isadditemenabled:boolean=false;
  blankobject:ProductItem={
    id:0,
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
  constructor() {

   }

  

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
  finalitemdisplayedColumns: string[] = [
    "item",
    "hsnCode",
    "itemCode",
    "unit",
    "reqtotalQty",
    "poQty",
     "rate",
    "taxPercentage",
    "taxInEx",
    "taxValue",
    "discount",
    "rateindicator",
    "totalAmount",
  ];
  chargesdisplayedColumns:string[]=[
"name",
"amount",
"taxPercentage",
"taxamount",
"totalAmount",
"action"
  ] ;
  addItemenable()
  {
    this.dataSourcetemp.data.push(Object.assign({},this.blankobject) );
    this.isadditemenabled=true;
  }
  addItemtolist()
  {
    let temp:FinalProductItem[] = this.dataSourcetemp.data;
    let temp1:FinalProductItem[] = this.dataSource.data;
    temp.filter(x=>{
      if(x!=this.blankobject)
      temp1.push(Object.assign({reqtotalQty:x.poQty}, x));
      console.log(x);
    });
    this.dataSource.data = temp1;
    console.log(this.dataSource.data);
  }
  dataSourcetemp: MatTableDataSource<ProductItem> = new MatTableDataSource([]);
  dataSource: MatTableDataSource<FinalProductItem> = new MatTableDataSource([]);
  chargesdataSource :MatTableDataSource<AdditionalCharges> = new MatTableDataSource([]);
  addItem(){
    //this.dataSource.data.push(Object.assign({},this.blankobject));
    let temp = this.dataSourcetemp.data;
    this.blankobject.id=this.blankobject.id+1;
    temp.push(Object.assign({}, this.blankobject));
    this.dataSourcetemp.data = temp;
    console.log(this.dataSource.data);
  }
  addChargesItem(id:number)
  {
    debugger;
    let obj=this.poDDL.additionalChargesDDL.filter(x=>x.value==id)[0];
    let temp = this.chargesdataSource.data;
    console.log(obj);
    if(temp.findIndex(x=>x.id==obj.value)==-1)
    {
      console.log(temp);
      temp.push({id:obj.value,name:obj.text,taxPercentage:0,totalAmount:0,amount:0,taxamount:0});
      this.chargesdataSource.data = temp;
    }
  }
  deletecharges(id:number)
  {
    let temp = this.chargesdataSource.data;
    if(temp.findIndex(x=>x.id==id)!=-1)
    {
      console.log(temp);
      temp=temp.filter(x=>x.id!=id);
      this.chargesdataSource.data = temp;
    }
  }

  additionalchargeschanged(id:number)
  {
    debugger;
    let selcharge=this.chargesdataSource.data.filter(x=>x.id==id)[0];
    let taxval=this.poDDL.gstTaxValueDDL.filter(x=>x.value==selcharge.taxPercentage)[0].text;
    console.log(selcharge);
    selcharge.taxamount=selcharge.amount*(taxval*0.01);//percentage
    this.totaladditionalcharges=this.totaladditionalcharges-selcharge.totalAmount;
    selcharge.totalAmount=selcharge.taxamount+Number(selcharge.amount);
    this.totaladditionalcharges=this.totaladditionalcharges+selcharge.totalAmount;
  }

  Hsncodeupdate(id:number)
  {
    let tempobj=this.dataSourcetemp.data.filter(x=>x.id==id)[0];
    tempobj.hsnCode=this.productitems.filter(x=>x.value==tempobj.item)[0].value4;
  }
}


export interface ProductItem{
  id:number,
  item:any,
  rate:string,
  poQty:number,
  hsnCode:string,
  taxPercentage:number,
  taxInEx:string,
  discount:number,
  rateindicator:string,
  unit:any
}
export interface FinalProductItem extends ProductItem
{
  itemCode?:string,
  reqtotalQty?:number,
  taxValue?:number,
  totalAmount?:number
}
export interface AdditionalCharges{
  id:number,
  name:string,
amount:number,
taxPercentage?:number,
taxamount:number,
totalAmount:number
}
