import { Component } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [],
  templateUrl: './input-button-unit.component.html',
  styleUrl: './input-button-unit.component.css'
})


export class InputButtonUnitComponent {
  title = 'Learn about components';
  
  constructor() {
    this.title = "This is a new title"
  }

}


