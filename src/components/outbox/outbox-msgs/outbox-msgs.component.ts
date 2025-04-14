import { Component, OnInit } from '@angular/core';
import { OutboxMessage } from '../../../models/outboxMsg';
import { OutboxMsgsService } from '../../../services/outbox-msgs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-outbox-msgs',
  imports: [CommonModule],
  templateUrl: './outbox-msgs.component.html',
  styleUrl: './outbox-msgs.component.css'
})
export class OutboxMsgsComponent implements OnInit {
  outboxMessages: OutboxMessage[] = [];

  constructor(private outboxService: OutboxMsgsService) {}

  ngOnInit(): void {
    this.outboxService.getAllOutbox().subscribe({
      next: (data) => this.outboxMessages = data,
      error: (err) => console.error(err)
    });
  }
}