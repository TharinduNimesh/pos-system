enum EnumBusinessType {
  StockBased = "StockBased",
  ServiceBased = "ServiceBased",
}

export type BusinessType = {
  id: number;
  name: string;
  business_type: EnumBusinessType;
};

export type SignUpFormType = {
  name: string | undefined;
  nic: string | undefined;
  mobile: string | undefined;
  email: string | undefined;
  business_name: string | undefined;
  business_id: string | undefined;
  total_branches: number;
  total_employees: number;
  business_type: BusinessType | undefined;
  business_category: string | undefined;
};
