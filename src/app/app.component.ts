import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  navigationCategories = ['Rinder', 'Schafe', 'Schweine'];
  
  /*  Create a Array with the categories of each Type 
      Usable Variables: categoryCow, categorySheep, categoryPig */
  
  categoryCow = ['kleine', 'mittlere', 'grosse'];

  testCalendar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,31];
}
