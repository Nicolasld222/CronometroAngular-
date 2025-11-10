import { Component, signal } from '@angular/core';
import { CronometroComponent } from './cronometro/cronometro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CronometroComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('cronometro-app');
}
