import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OutboxMessage } from '../models/outboxMsg';
import { Observable } from 'rxjs';
import { BASE_URL, OUTBOX_URL } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class OutboxMsgsService {

  constructor(private http: HttpClient) {}

  getAllOutbox(): Observable<OutboxMessage[]> {
    return this.http.get<OutboxMessage[]>(`${BASE_URL}/${OUTBOX_URL}`);
  }
}
