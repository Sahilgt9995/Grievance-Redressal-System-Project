import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter, Routes } from '@angular/router';

import { UserdashboardComponent } from '../components/userdashboard/userdashboard.component';
import { GrievanceComponent } from '../components/grievance/grievance.component';

const routes: Routes =[
  {path:"dashboard",component : UserdashboardComponent},
  {path:"grievance",component : GrievanceComponent}
  
]   


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
      provideRouter(routes)
    ]
})
export class CustomerModule { }
