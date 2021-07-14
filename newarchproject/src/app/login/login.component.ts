import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators,NgForm  } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserName="enter Name";
  password: any;
  // Cheak Login Data
  loginData(loginUser:NgForm){
    console.log(loginUser);
  }
 
  constructor() {
}

  ngOnInit(): void {
  }

}
