import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { DirectSupplierPOModel } from 'src/app/erp-models/vendor-management/direct-supplier-purchase-order/direct-supplier-po-model';

@Injectable({
  providedIn: 'root'
})
export class DirectSuppliePurchaseOrderService {

  constructor(private http: HttpClient) { }
  getdirectsupplierpo():Observable<DirectSupplierPOModel[]>
  {
    return this.http.get<DirectSupplierPOModel[]>(environment.apipath+"/api/ERPVMPurchaseOrder/GetAll");
  }
}
