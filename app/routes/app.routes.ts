import { Routes } from "@angular/router";
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { AboutComponent } from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';
import { ContactComponent } from '../components/contact/contact.component';
export const appRoutes:Routes = [
    {path:"",component:LoginComponent},
    {path:"dashboard",component:DashboardComponent,
    children:[{path:"about",component:AboutComponent},
              {path:"home",component:HomeComponent},
              {path:"contact",component:ContactComponent}]}
];