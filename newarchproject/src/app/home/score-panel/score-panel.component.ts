import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-panel',
  templateUrl: './score-panel.component.html',
  styleUrls: ['./score-panel.component.css']
})
export class ScorePanelComponent implements OnInit {
  // inject Parent
  @Input() today_date:any;
  number1:number= 234500;
  constructor() { }

  ngOnInit(): void {
  }

}
