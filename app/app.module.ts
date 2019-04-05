import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginService } from "./services/login.service";
import { AboutService } from "./services/about.service";
import { HomeService } from "./services/home.service";
import { ContactService } from "./services/contact.service";
import { LogoutService } from "./services/logout.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes/app.routes";
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    DashboardComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService,AboutService,HomeService,ContactService,LogoutService],
  bootstrap: [IndexComponent]
})
export class AppModule { }
