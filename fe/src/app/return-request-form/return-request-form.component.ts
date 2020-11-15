import { Component } from '@angular/core';

import {
  Device,
  ReturnRequestData,
} from '../return-request-http/return-request-http.interfaces';
import { ReturnRequestHttpService } from '../return-request-http/return-request-http.service';

@Component({
  selector: 'app-return-request-form',
  templateUrl: './return-request-form.component.html',
  styleUrls: ['./return-request-form.component.css'],
  providers: [ReturnRequestHttpService],
})
export class ReturnRequestFormComponent {
  public numberOfDeviceForms = 1;
  public deviceForms: any[];
  public returnRequestData: any = {};

  constructor(private returnRequestHttpService: ReturnRequestHttpService) {
    this.updateDeviceForms();
  }

  onSubmit(): void {
    this.returnRequestHttpService
      .createReturnRequest(this.returnRequestData as ReturnRequestData)
      .subscribe((data) => {
        console.log(data);
      });
  }

  public receiveDeviceMessage(devices: Device[]): void {
    console.log('received devices', devices);
    this.returnRequestData.devices = this.returnRequestData.devices || [];
    if (devices.length > 0) {
      // there should be only one matching device
      this.returnRequestData.devices.push(devices[0]);

      this.numberOfDeviceForms += 1;
      this.updateDeviceForms();
    }
  }

  private updateDeviceForms(): void {
    this.deviceForms = Array(this.numberOfDeviceForms);
  }
}
