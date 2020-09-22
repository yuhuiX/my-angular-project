import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { Sku } from './skus.interfaces';
import { SkusService } from './skus.service';

@UseGuards(LocalAuthGuard)
@Controller('skus')
export class SkusController {
  constructor(private readonly skusService: SkusService) {}

  @Get()
  find(@Query('sku') sku?: string): Promise<Sku[]> {
    return this.skusService.findSku({ sku });
  }
}
