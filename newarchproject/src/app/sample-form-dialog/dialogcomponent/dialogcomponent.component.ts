import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogcomponent',
  templateUrl: './dialogcomponent.component.html',
  styleUrls: ['./dialogcomponent.component.css']
})
export class DialogcomponentComponent implements OnInit {

  Data="Dialog to fromComponent";
  constructor(
    public dialogRef: MatDialogRef<DialogcomponentComponent>,
  ) { }

  ngOnInit(): void {
  }
  // Cheak Save & Close Button Value
  dataGetFromChild(data:string){
    if(data=="save"){
      alert(data);
    this.dialogRef.close()
    }else{
      this.dialogRef.close()
  }
 }
}
