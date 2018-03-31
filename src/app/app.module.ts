import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AgmCoreModule } from '@agm/core';
import { MapContentComponentComponent } from './map-content-component/map-content-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MapContentComponentComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCN0WNdE20LrZPVbBwRs0m-YsE81oYPl8c'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
