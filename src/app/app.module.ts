import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home';
import { AboutComponent } from './components/about';


@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }