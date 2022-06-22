import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child';
  currentEmployee ="Manny";
  employee =['Sam', 'Cam', 'Larry', 'Stward'];
  addEmployee(newEvent: string){
    this.employee.push(newEvent);
  }
}
