import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from  './home-page/home-page.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  { path: 'view', component: HomePageComponent },
  {path : 'login' , component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
