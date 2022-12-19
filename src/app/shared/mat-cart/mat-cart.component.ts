import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mat-cart',
  templateUrl: './mat-cart.component.html',
  styleUrls: ['./mat-cart.component.css']
})
export class MatCartComponent {
  @Input() title = '';
}
