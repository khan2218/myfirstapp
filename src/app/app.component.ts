import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Project';
  // Declare array of months

  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  isavailable = true; // variable is set to true

  myClickFuntion(event){
    alert("Button is Clicked");
    console.log(event);
  }

  changeMonths(event){
    alert("Mohth Change Event $event");

  }
}
