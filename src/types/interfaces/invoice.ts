interface VAInfo {
  bank: string;
  va_number: string;
}

export interface Invoice {
  status_code: string;
  status_message: string;
  transaction_id: string;
  order_id: string;
  merchant_id: string;
  gross_amount: string;
  currency: string;
  payment_type: string;
  transaction_time: string;
  transaction_status: string;
  fraud_status: string;
  va_numbers: VAInfo[];
  expiry_time: string;
}
