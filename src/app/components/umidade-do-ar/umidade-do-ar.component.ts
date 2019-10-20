import { Component, OnInit } from '@angular/core';
import { Horta } from 'src/app/model/horta';
import { HortaServiceService } from 'src/app/service/horta-service.service';

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
            text: 'Umidade do Ambiente'
        }
  };
  arrayHorta: Array<Horta>;

  arrayUmidadeDoAr = [];
  arrayData = [];

  umidadeDoAr = [
    { data: this.arrayUmidadeDoAr, label: 'Umidade do Ambiente' },
  ];
  datas = this.arrayData;

  constructor(private hortaService: HortaServiceService) { }

  ngOnInit() {
    this.hortaService.getAll().subscribe(r => {
      if (r == null) {
        alert('Dados inválidos.');
      } else {
        this.arrayHorta = r;
        this.populaArrays(this.arrayHorta);
      }
    },
      err => {
        console.log('Error: ' + err);
        alert('Dados inválidos.');
      });
  }


  populaArrays(array: Array<Horta>) {
    array.forEach((horta) => {
      this.arrayUmidadeDoAr.push(horta.umidade);
      //console.log(horta.date);
      this.arrayData.push(horta.date);
    });

  }

}
