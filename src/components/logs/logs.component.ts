import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Log } from '../../models/log';
import { LogsService } from '../../services/logs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logs',
  imports: [ FormsModule,CommonModule],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent {
  logId: string = '';
  logs: Log[] = [];
  searched = false;

  constructor(private logService: LogsService) {}

  fetchLogs(): void {
    this.searched = false;
   
    this.logService.getLogs(this.logId).subscribe({
      next: (data) => {
        this.logs = data;
        this.searched = true;
      },
      error: (err) => {
        console.error('Error fetching logs:', err);
        this.logs = [];
        this.searched = true;
      }
    });
  }
}