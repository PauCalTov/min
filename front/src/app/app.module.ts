import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { FooterComponent } from './components/homePage/footer/footer.component';
import { AboutComponent } from './components/homePage/about/about.component';
import { ContactComponent } from './components/homePage/contact/contact.component';
import { FeedbackComponent } from './components/homePage/feedback/feedback.component';
import { HomeComponent } from './components/homePage/home/home.component';
import { MarketComponent } from './components/homePage/market/market.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    FeedbackComponent,
    HomeComponent,
    MarketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
