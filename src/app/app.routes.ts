import { Routes } from '@angular/router';
import { LogsComponent } from '../components/logs/logs.component';
import { AllTicketsComponent } from '../components/Booking/all-tickets/all-tickets.component';
import { OutboxMsgsComponent } from '../components/outbox/outbox-msgs/outbox-msgs.component';

export const routes: Routes = [
    { path: 'logs', component: LogsComponent },
    { path: 'bookings', component: AllTicketsComponent },
    { path: 'outbox', component: OutboxMsgsComponent },
    { path: '', redirectTo: '/logs', pathMatch: 'full' } // Default route
  ];
