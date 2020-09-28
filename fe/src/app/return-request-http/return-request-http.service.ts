import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ReturnRequestData } from './return-request-http.interfaces';

@Injectable()
export class ReturnRequestHttpService {
  private ReturnRequestHttpBaseUrl = 'http://localhost:3000';
  private devicesEndpoint = this.ReturnRequestHttpBaseUrl + '/devices';
  private returnRequestEndpoint =
    this.ReturnRequestHttpBaseUrl + '/returnRequests';

  constructor(private httpClient: HttpClient) {}

  public createReturnRequest(
    returnRequestData: ReturnRequestData,
  ): Observable<any> {
    return this.post({
      endpoint: this.returnRequestEndpoint,
      requestBody: returnRequestData,
    });
  }

  public findDeviceBySerialNumber(deviceSerialNumber: string): Observable<any> {
    return this.get({
      endpoint: this.devicesEndpoint,
      params: new HttpParams().set('deviceSerialNumber', deviceSerialNumber),
    });
  }

  private get({
    endpoint,
    params,
  }: {
    endpoint: string;
    params: HttpParams;
  }): Observable<any> {
    return this.request({
      endpoint,
      method: 'get',
      params,
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
    params,
    requestBody,
  }: {
    endpoint: string;
    method: 'get' | 'post';
    params?: HttpParams;
    requestBody?: any;
  }): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Basic ' + btoa('kid:secret'));

    if (method === 'get') {
      return this.httpClient[method](endpoint, { headers, params });
    }
    if (method === 'post') {
      return this.httpClient[method](endpoint, requestBody, {
        headers,
      });
    }
  }
}
