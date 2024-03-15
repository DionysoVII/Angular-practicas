import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title:string = 'Hola Mundo!';
  public counter:number = 10;


  setTen(): void{
     this.counter = 10
  }

  plusOne(One:number): void{
    this.counter += One;
  }


  value: string = ''
  changeValue(){
    this.value= 'Hola papus'
  }


  }




