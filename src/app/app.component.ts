import { Component } from '@angular/core';
import {ActivatedRoute, RouterModule, RouterOutlet} from '@angular/router';
import {NvComponent} from "./components/nv/nv.component";
import {routeTransition} from "./route-transition";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NvComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    routeTransition
  ]
})
export class AppComponent {
  title = 'transitions';

  constructor(protected route: ActivatedRoute) {
  }
}
