import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { HomeComponent } from './auth/components/home/home.component';
import { AboutusComponent } from './auth/components/aboutus/aboutus.component';
import { ContactusComponent } from './auth/components/contactus/contactus.component';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';

import { UserdashboardComponent } from './modules/User/components/userdashboard/userdashboard.component';



export const routes: Routes = [
    {path:'',component : HomeComponent},
    {path:'aboutus',component : AboutusComponent},
    {path:'contactus',component : ContactusComponent},
    {path:'login',component : LoginComponent},
    {path:'register',component : SignupComponent},
    {path:"admin", loadChildren:()=>import("./modules/admin/admin.module").then(e=>e.AdminModule)},
    {path:"employee", loadChildren:()=>import("./modules/employee/employee.module").then(e=>e.EmployeeModule)},
    {path:"user", loadChildren:()=>import("./modules/User/customer/customer.module").then(e=>e.CustomerModule)}
];
