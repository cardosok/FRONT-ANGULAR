import { Component, OnInit, Input } from '@angular/core';
import { Horta } from 'src/app/model/horta';
import { HortaServiceService } from 'src/app/service/horta-service.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-temperatura-do-ar',
  templateUrl: './temperatura-do-ar.component.html',
  styleUrls: ['./temperatura-do-ar.component.css']
})
export class TemperaturaDoArComponent implements OnInit {
  chartOptions = {
    responsive: true,
    title: {
            display: true,
            fontSize: 16,
            text: 'Temperatura do Ambiente (ºC)'
        }
  };
  arrayHorta: Array<Horta>;

  arrayTemperaturaDoAr = [];
  arrayData = [];

  temperaturaDoAr = [
    { data: this.arrayTemperaturaDoAr, label: 'Temperatura do Ambiente' },
  ];
  datas = this.arrayData;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.arrayHorta.subscribe(val => {
      this.arrayHorta = val;
      this.populaArrays(this.arrayHorta);
    });
  }

  async populaArrays(array: Array<Horta>) {
    let value = this.arrayTemperaturaDoAr.length;
    let value2 = this.arrayData.length;
    
    for (let index = 0; index < value; index++) {
      this.arrayTemperaturaDoAr.pop();
    }

    for (let index = 0; index < value2; index++) {
      this.arrayData.pop();
    }
    await array.forEach((horta) => {
      this.arrayTemperaturaDoAr.push(horta.temperaturaDoAr);
      let data = this.formataDate(horta.date);
      this.arrayData.push(data);     
    });
  }
  formataDate(date: Date){
    let data = (new Date(date)).toLocaleString('pt-BR')
    return data;
  }
}
