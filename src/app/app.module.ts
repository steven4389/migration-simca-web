import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { LandingPageComponent } from './public/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { PrivateFooterComponent } from './components/private-footer/private-footer.component';
import { PublicFooterComponent } from './components/public-footer/public-footer.component';
import {LoginComponent} from '../app/private/login/login.component';
import {CaumpusComponent} from '../app/private/campus/campus.component'

//services
import {LoginService} from './services/login.service';
import {UserService} from './services/user.service';
import {variablesGlobales} from './services/variablesGlobales';
import { DashboardComponent } from './private/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    PrivateFooterComponent,
    PublicFooterComponent,
    LoginComponent,
    CaumpusComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService, UserService, variablesGlobales],
  bootstrap: [AppComponent]
})
export class AppModule { }
