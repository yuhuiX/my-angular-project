import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { Device } from './devices.interfaces';
import { DevicesService } from './devices.service';

@UseGuards(LocalAuthGuard)
@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Get()
  find(
    @Query('deviceSerialNumber') deviceSerialNumber?: string,
  ): Promise<Device[]> {
    return this.devicesService.findDevice({ deviceSerialNumber });
  }
}
