import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { HortaServiceService } from './service/horta-service.service';
import { RouterModule, Routes } from '@angular/router'
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemperaturaDoArComponent } from './components/temperatura-do-ar/temperatura-do-ar.component';
import { UmidadeDoArComponent } from './components/umidade-do-ar/umidade-do-ar.component';
import { UmidadeDoSoloComponent } from './components/umidade-do-solo/umidade-do-solo.component';


const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'temperaturaDoAr', component: TemperaturaDoArComponent },
  { path: 'umidadeDoSolo', component: UmidadeDoSoloComponent },
  { path: 'umidadeDoAr', component: UmidadeDoArComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TemperaturaDoArComponent,
    UmidadeDoArComponent,
    UmidadeDoSoloComponent
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
    CommonModule,
    FormsModule
    // Chart
  ],
  providers: [HortaServiceService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
