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
    return this.post({
      endpoint: this.returnRequestEndpoint,
      requestBody: returnRequestData,
    });
  }

  private post({
    endpoint,
    requestBody,
  }: {
    endpoint: string;
    requestBody: any;
  }): Observable<any> {
    return this.request({
      endpoint,
      method: 'post',
      requestBody,
    });
  }

  private request({
    endpoint,
    method,
    requestBody,
  }: {
    endpoint: string;
    method: 'post';
    requestBody: any;
  }): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Basic ' + btoa('kid:secret'));

    if (method === 'post') {
      return this.httpClient[method](endpoint, requestBody, {
        headers,
      });
    }
  }
}
