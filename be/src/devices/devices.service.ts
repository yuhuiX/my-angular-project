import { Device, FindDeviceOptions } from './devices.interfaces';

import { Injectable } from '@nestjs/common';

@Injectable()
export class DevicesService {
  private readonly devices: Device[];

  constructor() {
    this.devices = [
      {
        id: 'device-1',
        deviceSerialNumber: 'AB11111',
        sku: '11111',
      },
      {
        id: 'device-2',
        deviceSerialNumber: 'AB12222',
        sku: '22222',
      },
      {
        id: 'device-3',
        deviceSerialNumber: 'AB12333',
        sku: '33333',
      },
    ];
  }

  findDevice({ deviceSerialNumber }: FindDeviceOptions): Promise<Device[]> {
    let devices: Device[];
    if (deviceSerialNumber === undefined) {
      devices = this.devices;
    } else {
      devices = this.devices.filter(deviceData => {
        return deviceData.deviceSerialNumber === deviceSerialNumber;
      });
    }

    return Promise.resolve(devices);
  }
}
