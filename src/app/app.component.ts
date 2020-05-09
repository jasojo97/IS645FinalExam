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
  arrayEvenFinal: number[];
  result: number[];



  checkInputs(): string {

    if(isNaN(this.firstInput)==true){
      return "Number 1 input" + this.firstInput + "is not a valid number"
    }

    if(isNaN(this.secondInput)==true){
      return "Number 2 input" + this.secondInput;
    }
    
    
  }

  checkInputs2(): boolean {

    if(isNaN(this.firstInput)==true){
      return true;
    }

    if(isNaN(this.secondInput)==true){
      return true;
    }

    if(isNaN(this.firstInput)==false && isNaN(this.secondInput)==false){

      return false;

    }
    
    
  }

  gettingEven(): number[]{
    if(this.firstInput>this.secondInput){
      for (let i =this.secondInput; i<=this.firstInput; i++){
        if(i>this.secondInput){
          this.arrayEven.push(i);
        }
      }

    }

    else{
      for (let i =this.firstInput; i<=this.secondInput; i++){
        if(i>this.firstInput){
          this.arrayEven.push(i);
        }
      }
    }

    this.result = this.arrayEven.filter(function(num){return this.firstInput > this.secondInput ? num % 2 ===0: num%2 ===1}); 

    return this.result;

    
    
    
    
  }
}
