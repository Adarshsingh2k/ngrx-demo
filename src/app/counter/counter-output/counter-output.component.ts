import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, observable } from 'rxjs';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  // @Input() counter: any;

  // counter!: number;
  counter$: Observable<{ counter: number; }> | undefined
  constructor(private store:Store<{counter:CounterState}>) { }
  
  ngOnInit(): void {
    // this.store.select('counter').subscribe((data)=>{
    //   this.counter=data.counter
    // })

    this.counter$=this.store.select('counter')
    // console.log(this.counter$.counter)


  }

}