import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogcomponentComponent } from '../sample-form-dialog/dialogcomponent/dialogcomponent.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todayDate : Date = new Date();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  // Dialog Popup Event 
  openDialog(){
    this.dialog.open(DialogcomponentComponent);
  }

}
