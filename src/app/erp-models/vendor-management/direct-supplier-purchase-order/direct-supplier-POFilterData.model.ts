
export interface POFilterDataModel
{
  poDateTo:string,
  poDateFrom:string,
  userId:number;
  poTypeId:number,
  isStatus:number
}

//let obj:any={"typeOfRequest":1,"companyId":1,"branchId":2,"fromDate":"01-30-2016","toDate":"01-30-2022","userId":7,"roleId":4};
//todo check if related with filterdatamodel
export interface CountPOFilterDataModel// extends POFilterDataModel
{
  typeOfRequest: number;
  companyId: number;
  branchId: number;
  fromDate: string;
  toDate: string;
  userId: number;
  roleId: number;
}