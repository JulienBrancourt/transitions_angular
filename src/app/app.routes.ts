import { Routes } from '@angular/router';
import {PageAComponent} from "./pages/page-a/page-a.component";
import {PageBComponent} from "./pages/page-b/page-b.component";

export const routes: Routes = [
  {path: 'pagea', component: PageAComponent},
  {path: 'pageb', component: PageBComponent},
];
