import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LogsComponent } from '../components/logs/logs.component';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KafkaUiDemo';
}
