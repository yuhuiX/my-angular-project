import { Component, OnInit } from '@angular/core';

import { ReturnRequestData } from '../return-request-http/return-request-http.interfaces';
import { ReturnRequestHttpService } from '../return-request-http/return-request-http.service';

@Component({
  selector: 'app-return-request-form',
  templateUrl: './return-request-form.component.html',
  styleUrls: ['./return-request-form.component.css'],
  providers: [ReturnRequestHttpService],
})
export class ReturnRequestFormComponent implements OnInit {
  public returnRequestData: any = {};

  constructor(
    private returnRequestHttpService: ReturnRequestHttpService,
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.returnRequestHttpService
      .createReturnRequest(this.returnRequestData as ReturnRequestData)
      .subscribe((data) => {
        console.log(data);
      });
  }
}