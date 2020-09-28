import { Component, EventEmitter, Output } from '@angular/core';

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

  @Output() deviceMessageEvent = new EventEmitter<string>();

  constructor(private returnRequestHttpService: ReturnRequestHttpService) {}

  public verifyDeviceSerialNumber(): void {
    this.returnRequestHttpService
      .findDeviceBySerialNumber(this.deviceData.deviceSerialNumber)
      .subscribe((data) => {
        console.log('device data', data);
        this.deviceMessageEvent.emit(data);
      });
  }
}
