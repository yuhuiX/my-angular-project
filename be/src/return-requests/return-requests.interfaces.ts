interface Device {
  deviceSerialNumber?: string;
  sku?: string;
}

export interface ReturnRequest extends InitialReturnRequest {
  id: string;
  devices: Device[];
}

export interface InitialReturnRequest {
  customerEmail: string;
  customerFullName?: string;
}
