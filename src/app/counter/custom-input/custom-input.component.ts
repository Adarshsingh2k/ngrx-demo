import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customInput, nameChange } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {

  value!:number;
  constructor(private store:Store<{counter:CounterState}>) { }

  ngOnInit(): void {
  }

  onAdd(){
    console.log(this.value)
    this.store.dispatch(customInput({value:this.value}))
  }

  onNameChange(){
    this.store.dispatch(nameChange())
  }

}
