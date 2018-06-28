/*
Routes
*/
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UploadComponent } from './components/upload/upload.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'file', component: UploadComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
