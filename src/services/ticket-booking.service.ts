import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketBooking } from '../models/ticket';
import { BASE_URL, BOOKING_URL } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class TicketBookingService {

  constructor(private http: HttpClient) { }
  getAllBookings(): Observable<TicketBooking[]> {
    return this.http.get<TicketBooking[]>(`${BASE_URL}/${BOOKING_URL}`);
  }
}
