import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return-request-form',
  templateUrl: './return-request-form.component.html',
  styleUrls: ['./return-request-form.component.css']
})
export class ReturnRequestFormComponent implements OnInit {
  public returnRequestData: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.returnRequestData);
  }

}
