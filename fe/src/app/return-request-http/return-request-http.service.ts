import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ReturnRequestData } from './return-request-http.interfaces';

@Injectable()
export class ReturnRequestHttpService {
  private ReturnRequestHttpBaseUrl = 'http://localhost:3000';
  private returnRequestEndpoint =
    this.ReturnRequestHttpBaseUrl + '/returnRequests';

  constructor(private httpClient: HttpClient) {}

  createReturnRequest(returnRequestData: ReturnRequestData): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Basic ' + btoa('kid:secret'));

    return this.httpClient.post(this.returnRequestEndpoint, returnRequestData, {
      headers,
    });
  }
}
