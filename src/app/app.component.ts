import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';

  firstInput: number;
  secondInput: number;

  arrayEven: number[];


  checkInputs(): number {
    
    return 10;
  }

  gettingEven(): number[]{
    
    
    return [1,2,3];
  }
}
