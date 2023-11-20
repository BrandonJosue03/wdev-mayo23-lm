import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaseComponent } from './clase/clase.component';
import { HttpClientModule } from '@angular/common/http';
import { GrupoComponent } from './grupo/grupo.component';
@NgModule({
  declarations: [
    AppComponent,
    ClaseComponent,
    GrupoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
