import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, observable } from 'rxjs';
import { getCounter, getName } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  // @Input() counter: any;

  // counter!: number;
  // counter$: Observable<{ counter: number,name:string }> | undefined
  counter$!:Observable<number>
  authName$!:Observable<string>
  constructor(private store:Store<{counter:CounterState}>) { }
  
  ngOnInit(): void {
    // this.store.select('counter').subscribe((data)=>{
    //   this.counter=data.counter
    // })

    // This method is used when we do not have selector then we call the whole component
    // this.counter$=this.store.select('counter')
    // console.log(this.counter$.counter)

    // After CreateSelector
    this.counter$=this.store.select(getCounter)
    this.authName$=this.store.select(getName)
    



  }

}
