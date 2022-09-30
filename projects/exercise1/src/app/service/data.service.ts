import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public message = "Success"
  private newMessage = new BehaviorSubject<any>(this.message);

  constructor() { }

  getMessage(): Observable<any> {
    return this.newMessage.asObservable();
  }
}
