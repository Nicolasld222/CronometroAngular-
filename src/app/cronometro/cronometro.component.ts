import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cronometro',
  standalone: true,
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnDestroy {
  contador: number = 0;
  private subscription!: Subscription;
  private observableFrio!: Observable<number>;

  constructor() {
    this.observableFrio = new Observable<number>(observer => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        observer.next(count);
      }, 1000);
   
      return () => {
        clearInterval(interval);
      };
    });
  }

  empezar() {
    if (this.subscription) return;
    this.subscription = this.observableFrio.subscribe(valor => {
      this.contador = valor;
    });
  }

  reiniciar() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined!;
    }
    this.contador = 0;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}