import { Controller, Get, Query } from '@nestjs/common';
import { Sku } from './skus.interfaces';
import { SkusService } from './skus.service';

@Controller('skus')
export class SkusController {
  constructor(private readonly skusService: SkusService) {}

  @Get()
  find(@Query('sku') sku?: string): Promise<Sku[]> {
    return this.skusService.findSku({ sku });
  }
}
