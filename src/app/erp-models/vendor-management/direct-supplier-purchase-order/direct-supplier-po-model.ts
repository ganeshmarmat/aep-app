export interface DirectSupplierPOModel {
    poNumber: string
    poDate: string
    poValidityFrom: string
    poValidityTo: string
    quotationId: number
    quotationOn: string
    supplierId: number
    contactPersonId: string
    warehouseId: number
    paymentTypeId: number
    narration: string
    approvalStatusId: number
    approvalComment: string
    itemDeliveryDurationId: number
    fromEMail: any
    itemTotalCost: number
    taxValueTotal: number
    totalCost: number
    additionalChargesTotal: number
    flatDiscountRateIndicator: number
    flatDiscountValue: number
    grandTotal: number
    poType: string
    paymentTerm: number
    isStatus: number
    approvedOn: string
    isReadymade: number
    poTypeId: number
    id: number
    companyId: number
    branchId: number
    isActive: string
    createdBy: number
    createdOn: string
    updatedBy: number
    updatedOn: string
  }