import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/flight/';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
    providedIn: 'root'
})

export class FlightService {
    constructor(private http: HttpClient) { }

    getFlightList(): Observable<any> {
        return this.http.get(API_URL + 'list');
    }

    postFlightReservation(useremail: string, flightid: number, cost: number): Observable<any> {
        return this.http.post(API_URL + 'reservation', {
            useremail,
            flightid,
            cost
        }, httpOptions);
    }

    getAlreadyReserved(): Observable<any> {
        return this.http.get(API_URL + 'alreadyreserved');
    }
}