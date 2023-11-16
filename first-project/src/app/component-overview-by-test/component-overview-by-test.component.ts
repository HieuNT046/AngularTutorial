import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-overview-by-test',
  standalone: true,
  imports: [CommonModule],
  template: '<h1>Hello World!</h1>',
  styles: ['h1 { font-weight: normal; }']
})
export class ComponentOverviewByTestComponent {

}
