import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HortaServiceService } from './horta-service.service';
import { Horta } from '../model/horta';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private array = new BehaviorSubject(new Array<Horta>());
  arrayHorta = this.array.asObservable();
  
  constructor() { }

  changeMessage(val: Array<Horta>) {
    this.array.next(val);
  }
}
