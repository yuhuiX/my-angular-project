import { IsOptional, IsString } from 'class-validator';

export class FindSkuOptions {
  @IsOptional()
  @IsString()
  sku: string;
}

export interface Sku {
  id: string;
  sku: string;
}
