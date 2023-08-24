import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './Components/mainpage/mainpage.component';
import { CartpageComponent } from './Components/cartpage/cartpage.component';
import { NavigationComponent } from './Components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    CartpageComponent,
    NavigationComponent
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
