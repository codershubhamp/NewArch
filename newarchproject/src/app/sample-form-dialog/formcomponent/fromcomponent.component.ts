import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { FormControl,NgForm,Validators } from '@angular/forms';

@Component({
  selector: 'app-fromcomponent',
  templateUrl: './fromcomponent.component.html',
  styleUrls: ['./fromcomponent.component.css']
})
export class FromcomponentComponent implements OnInit {
  // inject input
  @Input()Hero!:string;
  // inject output
  @Output() newItemEvent = new EventEmitter<string>();
  UserName="enter Name";
  password: any;
  loginData(loginUser:NgForm){
    console.log(loginUser);
  }
  constructor() { }

  ngOnInit(): void {
  }
  // cheak Event Value
  outputEmit(value:string){
    this.newItemEvent.emit(value)
  }
  
}
