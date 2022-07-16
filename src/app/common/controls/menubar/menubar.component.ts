import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { MenuItem } from 'src/app/erp-models/menu/menuitem.model';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  @ViewChild('sidenav') public sidenav:MatSidenav;

  ngOnInit(): void {
  }
  
   

   menu: MenuItem [] = [
    {
      "iconName":"search",
      "id": 1,
      "displayName": "CSI Master",
      "children": [
        {
          "iconName":"description",
      "id": 34,
          "displayName": "Items Master",
          "route": "Item",
          "sequence": 0,
          "orderBy": 1
        },
        {
          "iconName":"keyboard_arrow_right",
      "id": 2,
          "displayName": "Screen Master",
          "route": "/dashboard/csi/role/role-details",
          "sequence": 0,
          "orderBy": 2
        },
        {
          "iconName":"arrow_forward_ios",
      "id": 3,
          "displayName": "Role Master",
          "route": "/dashboard/csi/role",
          "sequence": 0,
          "orderBy": 3
        },
        {
          "iconName":"subdirectory_arrow_right",
      "id": 6,
          "displayName": "Company Master",
          "route": "Company",
          "sequence": 0,
          "orderBy": 4
        },
        {
          "iconName":"arrow_right_alt",
      "id": 7,
          "displayName": "Department Master",
          "route": "Department",
          "sequence": 0,
          "orderBy": 5
        },
        {
          "iconName":"search",
      "id": 26,
          "displayName": "Assign Screen Master",
          "route": "AssignScreen",
          "sequence": 0,
          "orderBy": 6
        },
        {
          "iconName":"search",
      "id": 27,
          "displayName": "Entity Master",
          "route": "LedgerAccount",
          "sequence": 0,
          "orderBy": 7
        },
        {
          "iconName":"search",
      "id": 28,
          "displayName": "Brand Master",
          "route": "Brand",
          "sequence": 0,
          "orderBy": 8
        },
        {
          "iconName":"search",
      "id": 29,
          "displayName": "Employees Master",
          "route": "Employee",
          "sequence": 0,
          "orderBy": 9
        },
        {
          "iconName":"search",
      "id": 30,
          "displayName": "Shift Master",
          "route": "Shift",
          "sequence": 0,
          "orderBy": 10
        },
        {
          "iconName":"search",
      "id": 31,
          "displayName": "User Shift Master",
          "route": "UserShift",
          "sequence": 0,
          "orderBy": 11
        },
        {
          "iconName":"search",
      "id": 32,
          "displayName": "Attribute Master",
          "route": "Attribute",
          "sequence": 0,
          "orderBy": 12
        },
        {
          "iconName":"search",
      "id": 33,
          "displayName": "Attribute Value Master",
          "route": "AttributeValue",
          "sequence": 0,
          "orderBy": 13
        },
        {
          "iconName":"search",
      "id": 35,
          "displayName": "Item Category Master",
          "route": "ItemCategory",
          "sequence": 0,
          "orderBy": 14
        },
        {
          "iconName":"search",
      "id": 36,
          "displayName": "Item Group Master",
          "route": "ItemGroup",
          "sequence": 0,
          "orderBy": 15
        },
        {
          "iconName":"search",
      "id": 37,
          "displayName": "Item SubCategory Master",
          "route": "ItemSubCategory",
          "sequence": 0,
          "orderBy": 16
        },
        {
          "iconName":"search",
      "id": 38,
          "displayName": "Item Unit Master",
          "route": "Unit",
          "sequence": 0,
          "orderBy": 17
        },
        {
          "iconName":"search",
      "id": 39,
          "displayName": "Item Shade Master",
          "route": "ItemShade",
          "sequence": 0,
          "orderBy": 18
        },
        {
          "iconName":"search",
      "id": 40,
          "displayName": "Processes Master",
          "route": "Process",
          "sequence": 0,
          "orderBy": 19
        },
        {
          "iconName":"search",
      "id": 41,
          "displayName": "ProcessCycle Master",
          "route": "ProcessCycle",
          "sequence": 0,
          "orderBy": 20
        },
        {
          "iconName":"search",
      "id": 42,
          "displayName": "Machine Type Master",
          "route": "Machinetype",
          "sequence": 0,
          "orderBy": 21
        },
        {
          "iconName":"search",
      "id": 43,
          "displayName": "Machines Master",
          "route": "Machine",
          "sequence": 0,
          "orderBy": 22
        },
        {
          "iconName":"search",
      "id": 44,
          "displayName": "Segment Type Master",
          "route": "SegmentType",
          "sequence": 0,
          "orderBy": 23
        },
        {
          "iconName":"search",
      "id": 45,
          "displayName": "Style Master",
          "route": "Style",
          "sequence": 0,
          "orderBy": 24
        },
        {
          "iconName":"search",
      "id": 46,
          "displayName": "Rack Master",
          "route": "Rack",
          "sequence": 0,
          "orderBy": 25
        },
        {
          "iconName":"search",
      "id": 47,
          "displayName": "Warehouse Master",
          "route": "Warehouse",
          "sequence": 0,
          "orderBy": 26
        },
        {
          "iconName":"search",
      "id": 48,
          "displayName": "Discount Type Master",
          "route": "DiscountType",
          "sequence": 0,
          "orderBy": 27
        },
        {
          "iconName":"search",
      "id": 49,
          "displayName": "Rate Indicator Master",
          "route": "RateIndicator",
          "sequence": 0,
          "orderBy": 28
        },
        {
          "iconName":"search",
      "id": 50,
          "displayName": "Processing Status Master",
          "route": "ProcessingStatus",
          "sequence": 0,
          "orderBy": 29
        },
        {
          "iconName":"search",
      "id": 51,
          "displayName": "Payment Terms Master",
          "route": "PaymentTerm",
          "sequence": 0,
          "orderBy": 30
        },
        {
          "iconName":"search",
      "id": 52,
          "displayName": "Work Center Master",
          "route": "WorkCenter",
          "sequence": 0,
          "orderBy": 31
        },
        {
          "iconName":"search",
      "id": 53,
          "displayName": "Schemes Master",
          "route": "Scheme",
          "sequence": 0,
          "orderBy": 32
        },
        {
          "iconName":"search",
      "id": 10070,
          "displayName": "PackingType Master",
          "route": "PackingType",
          "sequence": 0,
          "orderBy": 33
        },
        {
          "iconName":"search",
      "id": 10074,
          "displayName": "Best Before Master",
          "route": "BestBefor",
          "sequence": 0,
          "orderBy": 34
        },
        {
          "iconName":"search",
      "id": 10083,
          "displayName": "Priority Master",
          "route": "Priority",
          "sequence": 0,
          "orderBy": 35
        }
      ]
    },
    {
      "iconName":"search",
      "id": 4,
      "displayName": "Customer Management",
      "children": [
        {
          "iconName":"search",
      "id": 5,
          "displayName": "Customer Enquiry",
          "route": "/dashboard/customer/enquiry",
          "sequence": 0,
          "orderBy": 1
        },
        {
          "iconName":"search",
      "id": 11,
          "displayName": "Customer Quotation",
          "route": "/dashboard/customer/quotation",
          "sequence": 0,
          "orderBy": 2
        },
        {
          "iconName":"search",
      "id": 12,
          "displayName": "Customer Purchase Order",
          "route": "CustomerPO",
          "sequence": 0,
          "orderBy": 3
        }
      ]
    },
    {
      "iconName":"search",
      "id": 8,
      "displayName": "Vendor Management",
      "children": [
        {
          "iconName":"search",
      "id": 9,
          "displayName": "Supplier Purchase Request",
          "route": "/dashboard/vendor/supplier-purchase-request",
          // "route": "SupplierPurchase",
          "sequence": 0,
          "orderBy": 1
        },
        {
          "iconName":"search",
      "id": 10,
          "displayName": "Supplier Quotation",
          "route": "/dashboard/vendor/direct-supplier-quotation",
          "sequence": 0,
          "orderBy": 2
        },
        {
          "iconName":"search",
      "id": 15,
          "displayName": "Supplier Purchase Order",
          "route": "SupplierPO",
          "sequence": 0,
          "orderBy": 3
        },
        {
          "iconName":"search",
      "id": 10060,
          "displayName": "Direct Purchase Request",
          "route": "SupplierPR",
          "sequence": 0,
          "orderBy": 4
        },
        {
          "iconName":"search",
      "id": 10061,
          "displayName": "Direct Supplier Quotation",
          "route": "SupplierDirectQuotation",
          "sequence": 0,
          "orderBy": 5
        },
        {
          "iconName":"search",
      "id": 10062,
          "displayName": "Direct Supplier Purchase Order",
          "route": "/dashboard/vendor/direct-supplier-PO/",
          "sequence": 0,
          "orderBy": 6
        }
      ]
    },
    {
      "iconName":"search",
      "id": 13,
      "displayName": "Design",
      "children": [
        {
          "iconName":"search",
      "id": 14,
          "displayName": "Bill Of Material",
          "route": "/dashboard/design/billofmaterial",
          "sequence": 0,
          "orderBy": 1
        }
      ]
    },
    {
      "iconName":"search",
      "id": 16,
      "displayName": "Inventory",
      "children": [
        {
          "iconName":"search",
      "id": 17,
          "displayName": "Good Receive",
          "route": "SupplierGRN",
          "sequence": 0,
          "orderBy": 1
        },
        {
          "iconName":"search",
      "id": 18,
          "displayName": "Material Issue",
          "route": "MaterialIssue",
          "sequence": 0,
          "orderBy": 2
        },
        {
          "iconName":"search",
      "id": 19,
          "displayName": "Transfer Details",
          "route": "ProcessIncharge",
          "sequence": 0,
          "orderBy": 3
        },
        {
          "iconName":"search",
      "id": 20,
          "displayName": "Material Stock",
          "route": "MaterialStock",
          "sequence": 0,
          "orderBy": 4
        },
        {
          "iconName":"search",
      "id": 10058,
          "displayName": "Return Order",
          "route": "ReturnOrder",
          "sequence": 0,
          "orderBy": 5
        },
        {
          "iconName":"search",
      "id": 10065,
          "displayName": "Warehouse Transfer",
          "route": "WearhouseTransfer",
          "sequence": 0,
          "orderBy": 6
        },
        {
          "iconName":"search",
      "id": 10081,
          "displayName": "Store Returns",
          "route": "StoreReturns",
          "sequence": 0,
          "orderBy": 7
        }
      ]
    },
    {
      "iconName":"search",
      "id": 21,
      "displayName": "Production Planning",
      "children": [
        {
          "iconName":"search",
      "id": 22,
          "displayName": "Work Order ",
          "route": "WorkOrder",
          "sequence": 0,
          "orderBy": 1
        },
        {
          "iconName":"search",
      "id": 23,
          "displayName": "Daily Production Plan",
          "route": "DailyProductionPlan",
          "sequence": 0,
          "orderBy": 2
        },
        {
          "iconName":"search",
      "id": 24,
          "displayName": "Daily Production Entry",
          "route": "DailyProductionEntry",
          "sequence": 0,
          "orderBy": 3
        },
        {
          "iconName":"search",
      "id": 25,
          "displayName": "Finish Good Transfer",
          "route": "Transfer",
          "sequence": 0,
          "orderBy": 4
        },
        {
          "iconName":"search",
      "id": 54,
          "displayName": "Process Incharge",
          "route": "ProcessIncharge",
          "sequence": 0,
          "orderBy": 5
        },
        {
          "iconName":"search",
      "id": 55,
          "displayName": "Job Work",
          "route": "Jobwork",
          "sequence": 0,
          "orderBy": 6
        },
        {
          "iconName":"search",
      "id": 56,
          "displayName": "Finish Good Create",
          "route": "FGCreate",
          "sequence": 0,
          "orderBy": 7
        },
        {
          "iconName":"search",
      "id": 57,
          "displayName": "Finish Good Retail",
          "route": "FG_Retail",
          "sequence": 0,
          "orderBy": 8
        },
        {
          "iconName":"search",
      "id": 10068,
          "displayName": "Store Production Plan",
          "route": "StoreProductionPlan",
          "sequence": 0,
          "orderBy": 9
        },
        {
          "iconName":"search",
      "id": 10069,
          "displayName": "Store Work Order",
          "route": "StoreWorkOrder",
          "sequence": 0,
          "orderBy": 10
        },
        {
          "iconName":"search",
      "id": 10082,
          "displayName": "Production Entry - Direct",
          "route": "ProductionEntry",
          "sequence": 0,
          "orderBy": 11
        }
      ]
    },
    {
      "iconName":"search",
      "id": 58,
      "displayName": "Invoices Challan",
      "children": [
        {
          "iconName":"search",
      "id": 59,
          "displayName": "Counter Sales",
          "route": "Sales",
          "sequence": 0,
          "orderBy": 1
        },
        {
          "iconName":"search",
      "id": 60,
          "displayName": "Customer Invoice",
          "route": "InvoiceChallan",
          "sequence": 0,
          "orderBy": 2
        }
      ]
    },
    {
      "iconName":"search",
      "id": 10066,
      "displayName": "Order Processing",
      "children": [
        {
          "iconName":"search",
      "id": 10067,
          "displayName": "Order Processing",
          "route": "OrderProcessing",
          "sequence": 0,
          "orderBy": 1
        }
      ]
    },
    {
      "iconName":"search",
      "id": 10072,
      "displayName": "Reports",
      "children": [
        {
          "iconName":"search",
      "id": 10073,
          "displayName": "Lot Number Tracking Report",
          "route": "LotNumberTrackingReport",
          "sequence": 0,
          "orderBy": 1
        },
        {
          "iconName":"search",
      "id": 10075,
          "displayName": "Material Aging Item NotSold Report",
          "route": "MaterialAgingItemNotSoldReport",
          "sequence": 0,
          "orderBy": 2
        },
        {
          "iconName":"search",
      "id": 10077,
          "displayName": "Material Aging Item Expire Within Seven Days ",
          "route": "ItemExpireUptoSevenDays",
          "sequence": 0,
          "orderBy": 3
        },
        {
          "iconName":"search",
      "id": 10078,
          "displayName": "Debit Note For Return Order",
          "route": "DebitNoteReturnOrder",
          "sequence": 0,
          "orderBy": 4
        },
        {
          "iconName":"search",
      "id": 10079,
          "displayName": "GSTR1 Report",
          "route": "GSTR1Report",
          "sequence": 0,
          "orderBy": 5
        },
        {
          "iconName":"search",
      "id": 10080,
          "displayName": "Supplier vs Purchase Product Rate Report ",
          "route": "SupplierVsProductRate",
          "sequence": 0,
          "orderBy": 6
        }
      ]
    }
  ];
}
