import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
<<<<<<< HEAD
import { WalletComponent } from './components/wallet/wallet.component';
=======
>>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    UserComponent,
    WalletComponent
=======
    UserComponent
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
