import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { LightToggleComponent } from './components/light-toggle/light-toggle.component';
import {FormsModule} from "@angular/forms";
import { SwitchButtonComponent } from './components/switch-button/switch-button.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardSwitchDimmerComponent } from './components/card-switch-dimmer/card-switch-dimmer.component';
import { SocketDetailComponent } from './pages/socket-detail/socket-detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LightToggleComponent,
    SwitchButtonComponent,
    CardsComponent,
    CardSwitchDimmerComponent,
    SocketDetailComponent,
    DashboardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
