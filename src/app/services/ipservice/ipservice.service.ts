import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class IpserviceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getIPAddress() {
    return this.httpClient.get('https://api.ipify.org/?format=json');
  }

}
