import { Component, OnInit  } from '@angular/core';
import { TicketBooking } from '../../../models/ticket';
import { TicketBookingService } from '../../../services/ticket-booking.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-tickets',
  imports: [CommonModule],
  templateUrl: './all-tickets.component.html',
  styleUrl: './all-tickets.component.css'
})
export class AllTicketsComponent implements OnInit {
  bookings: TicketBooking[] = [];

  constructor(private bookingService: TicketBookingService) {}

  ngOnInit(): void {
    this.bookingService.getAllBookings().subscribe({
      next: (data) => {
        this.bookings = data,
        console.log(this.bookings)
      },
    
      error: (err) => console.error(err)
    });
  }
}