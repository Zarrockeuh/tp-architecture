import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/flight/list';

@Injectable({
    providedIn: 'root'
})

export class FlightService {
    constructor(private http: HttpClient) { }

    getFlightList(): Observable<any> {
        return this.http.get(API_URL);
    }
}