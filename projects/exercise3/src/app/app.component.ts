import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, pairwise, startWith, Subscription } from 'rxjs';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  subscription!: Subscription;
  control: FormControl = new FormControl();
  randomNumber!: number;
  previousNumber: any;
  counterState: any;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    //Getting random number from service
    this.service.subjectdata();
    this.subscription = this.service.dataState.subscribe(
      (value: number) => {
        this.randomNumber = value;
      }
    )

    //mapping and pairing previous and current value from the service
    this.counterState = this.service.dataState.pipe(
      startWith(),
      pairwise(),
      map(([prev, current]) => ({ prev: prev, current: current }))
    );

    this.counterState.subscribe((val: { prev: any; }) => this.previousNumber = val.prev);
  }
}

