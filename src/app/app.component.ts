import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './calc/calc.component.html',
  styleUrl: './calc/calc.component.scss'
})
export class AppComponent {
  title = 'calculator';
}
