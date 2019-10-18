import { Component, OnInit } from '@angular/core';
import { Horta } from 'src/app/model/horta';
import { HortaServiceService } from 'src/app/service/horta-service.service';

@Component({
  selector: 'app-umidade-do-solo',
  templateUrl: './umidade-do-solo.component.html',
  styleUrls: ['./umidade-do-solo.component.css']
})

export class UmidadeDoSoloComponent implements OnInit {
  chartOptions = {
    responsive: true
  };
  arrayHorta: Array<Horta>

  arrayUmidadeDoSolo = [];
  arrayData = [];

  umidadeDoSolo = [
    { data: this.arrayUmidadeDoSolo, label: 'Umidade do Solo' },
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
      this.arrayUmidadeDoSolo.push(horta.umidadeDoSolo);
      this.arrayData.push(horta.date);
    });

  }

}

