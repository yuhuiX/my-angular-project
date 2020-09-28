export interface Device {
  deviceSerialNumber: 'string';
  sku: 'string';
}

export interface ReturnRequestData {
  customerEmail: string;
  customerFullName?: string;
  devices: Device[];
}
