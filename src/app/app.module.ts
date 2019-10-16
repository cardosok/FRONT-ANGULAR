import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { HortaServiceService } from './service/horta-service.service';
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common';


const appRoutes: Routes = [
  { path: '', component: IndexComponent },
];


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
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    ChartsModule,
    HttpClientModule,
    CommonModule
    // Chart
  ],
  providers: [HortaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
