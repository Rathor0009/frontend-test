import { Injectable } from '@angular/core';
import { Subject, interval, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  min: number = 0;
  max: number = 10;
  public dataSubject = new BehaviorSubject<number>(0);
  public dataState = this.dataSubject.asObservable();

  constructor() { }

  public subjectdata(): void {
    interval(1000).subscribe(x => this.dataSubject.next((Math.floor(Math.random() * (this.max - this.min + 1)) + this.min)));
  }

}
