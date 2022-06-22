import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() name ="Sam";
  @Output() newEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  addnewEmployee(value: string){
    this.newEvent.emit(value);
  }
}
