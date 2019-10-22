import { Component, OnInit, Input } from '@angular/core';
import { Horta } from 'src/app/model/horta';
import { HortaServiceService } from 'src/app/service/horta-service.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-umidade-do-ar',
  templateUrl: './umidade-do-ar.component.html',
  styleUrls: ['./umidade-do-ar.component.css']
})
export class UmidadeDoArComponent implements OnInit {
  chartOptions = {
    responsive: true,
    title: {
            display: true,
            fontSize: 16,
            text: 'Umidade do Ambiente (%)'
        }
  };
  arrayHorta: Array<Horta>;
  
  arrayUmidadeDoAr = [];
  arrayData = [];

  umidadeDoAr = [
    { data: this.arrayUmidadeDoAr, label: 'Umidade do Ambiente' },
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
    let value = this.arrayUmidadeDoAr.length;
    let value2 = this.arrayData.length;
    
    for (let index = 0; index < value; index++) {
      this.arrayUmidadeDoAr.pop();
    }

    for (let index = 0; index < value2; index++) {
      this.arrayData.pop();
    }
    await array.forEach((horta) => {
      this.arrayUmidadeDoAr.push(horta.umidade);
      let data = this.formataDate(horta.date)
      this.arrayData.push(data);
    });
  }

  formataDate(date: Date){
    let data = (new Date(date)).toLocaleString('pt-BR')
    return data;
  }

}
