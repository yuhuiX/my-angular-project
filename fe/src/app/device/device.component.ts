import { Component, EventEmitter, Output } from '@angular/core';

import { Device } from '../return-request-http/return-request-http.interfaces';
import { ReturnRequestHttpService } from '../return-request-http/return-request-http.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
})
export class DeviceComponent {
  public deviceData = {
    deviceSerialNumber: '',
  };
  public isValid = false;

  @Output() deviceMessageEvent = new EventEmitter<Device[]>();

  constructor(private returnRequestHttpService: ReturnRequestHttpService) {}

  public verifyDeviceSerialNumber(): void {
    this.returnRequestHttpService
      .findDeviceBySerialNumber(this.deviceData.deviceSerialNumber)
      .subscribe((devices: Device[]) => {
        console.log('device data', devices);
        this.isValid = true;
        this.deviceMessageEvent.emit(devices);
      });
  }
}
