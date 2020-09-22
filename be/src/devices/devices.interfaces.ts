import { IsOptional, IsString } from 'class-validator';

export class FindDeviceOptions {
  @IsOptional()
  @IsString()
  deviceSerialNumber: string;
}

export interface Device {
  id: string;
  deviceSerialNumber: string;
  sku: string;
}
