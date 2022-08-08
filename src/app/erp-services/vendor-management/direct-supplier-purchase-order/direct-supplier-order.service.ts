import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { DirectSupplierPOModel } from 'src/app/erp-models/vendor-management/direct-supplier-purchase-order/direct-supplier-po-model';
import { DirectSupplierPOStatusCountModel } from 'src/app/erp-models/vendor-management/direct-supplier-purchase-order/direct-supplier-po-statuscount-model';
import { POFilterDataModel } from 'src/app/erp-models/vendor-management/direct-supplier-purchase-order/direct-supplier-POFilterData.model';
import { PODirectSupplierStatusModel } from 'src/app/erp-models/vendor-management/direct-supplier-purchase-order/direct-supplier-pageload-status.model';

@Injectable({
  providedIn: 'root'
})
export class DirectSuppliePurchaseOrderService {

  constructor(private http: HttpClient) { }
  getdirectsupplierpo():Observable<DirectSupplierPOModel[]>
  {
    return this.http.get<DirectSupplierPOModel[]>(environment.apipath+"/api/ERPVMPurchaseOrder/GetAll");
  }
  getDirectSupplierPOByFilter(filter:POFilterDataModel):Observable<PODirectSupplierStatusModel[]>
  {
    return this.http.post<PODirectSupplierStatusModel[]>(environment.apipath+"/api/ERPVMPurchaseOrder/GetPageLoad",filter);
  }
  getstatuscount():Observable<DirectSupplierPOStatusCountModel>{
let obj:any={"typeOfRequest":1,"companyId":1,"branchId":2,"fromDate":"01-30-2016","toDate":"01-30-2022","userId":7,"roleId":4};
 return this.http.post<DirectSupplierPOStatusCountModel>(environment.apipath+"/api/ERPVMShared/GetStausCount",
 obj);
  }
  
}
