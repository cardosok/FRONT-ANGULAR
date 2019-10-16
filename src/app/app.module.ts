import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';

// import { Chart } from 'canvasjs';
// import { Chart } from 'chart.js';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FlexLayoutModule,
    MatCardModule,
    ChartsModule
    // Chart
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
