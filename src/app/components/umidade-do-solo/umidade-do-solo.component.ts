import { Component, OnInit } from '@angular/core';
import { Horta } from 'src/app/model/horta';
import { HortaServiceService } from 'src/app/service/horta-service.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-umidade-do-solo',
  templateUrl: './umidade-do-solo.component.html',
  styleUrls: ['./umidade-do-solo.component.css']
})

export class UmidadeDoSoloComponent implements OnInit {
  chartOptions = {
    responsive: true,
    title: {
      display: true,
      fontSize: 16,
      text: 'Umidade do Solo (%)'
    }
  };
  arrayHorta: Array<Horta>

  arrayUmidadeDoSolo = [];
  arrayData = [];

  umidadeDoSolo = [
    { data: this.arrayUmidadeDoSolo, label: 'Umidade do Solo' },
  ];
  datas = this.arrayData;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.arrayHorta.subscribe(val => {
      this.arrayHorta = val
      this.populaArrays(this.arrayHorta);
    });
  }

   async populaArrays(array: Array<Horta>) {
    let value = this.arrayUmidadeDoSolo.length;
    let value2 = this.arrayData.length;
    
    for (let index = 0; index < value; index++) {
      this.arrayUmidadeDoSolo.pop();
    }

    for (let index = 0; index < value2; index++) {
      this.arrayData.pop();
    }
    
    await array.forEach((horta) => {

      this.arrayUmidadeDoSolo.push(this.map(horta.umidadeDoSolo,800,150,0,100));
      let data = this.formataDate(horta.date);
      this.arrayData.push(data);
    });
  }

  formataDate(date: Date){
    let data = (new Date(date)).toLocaleString('pt-BR')
    return data;
  }

map(x,in_min,in_max,out_min,out_max) {
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

}
