import { Component, OnInit } from '@angular/core';
import { Horta } from 'src/app/model/horta';
import { HortaServiceService } from 'src/app/service/horta-service.service';

@Component({
  selector: 'app-temperatura-do-ar',
  templateUrl: './temperatura-do-ar.component.html',
  styleUrls: ['./temperatura-do-ar.component.css']
})
export class TemperaturaDoArComponent implements OnInit {
  chartOptions = {
    responsive: true
  };
  arrayHorta: Array<Horta>

  arrayTemperaturaDoAr = [];
  arrayData = [];

  temperaturaDoAr = [
    { data: this.arrayTemperaturaDoAr, label: 'Temperatura Do Ar' },
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
      this.arrayTemperaturaDoAr.push(horta.temperaturaDoAr);
      this.arrayData.push(horta.date);
    });

  }

}
