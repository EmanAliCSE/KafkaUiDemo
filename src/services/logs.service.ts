import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Log } from '../models/log';
import { BASE_URL, LOGS_URL } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  constructor(private http: HttpClient) { }

  getLogs(id:string): Observable<Log[]> {
    return this.http.get<Log[]>(`${BASE_URL}/${LOGS_URL}/${id}`);
  }
}
