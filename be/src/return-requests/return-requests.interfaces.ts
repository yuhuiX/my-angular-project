import { IsEmail, IsOptional, IsString } from 'class-validator';

interface Device {
  deviceSerialNumber?: string;
  sku?: string;
}

export interface ReturnRequest extends InitialReturnRequest {
  id: string;
  devices: Device[];
}

export class InitialReturnRequest {
  @IsEmail()
  customerEmail: string;

  @IsOptional()
  @IsString()
  customerFullName?: string;
}
