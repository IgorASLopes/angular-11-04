import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ClienteService } from './service/cliente.service';
import { HttpClient } from '@angular/common/http/src/client';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
