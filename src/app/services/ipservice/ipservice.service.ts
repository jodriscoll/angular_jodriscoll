import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class IpServiceService {
    constructor(
        private httpClient: HttpClient
    ) { }

    getIPAddress(): any {
        return this.httpClient.get('https://api.ipify.org/?format=json');
    }
}
