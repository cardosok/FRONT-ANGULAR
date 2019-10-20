import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { HortaServiceService } from '../../service/horta-service.service';
import { Horta } from '../../model/horta';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
   
  arrayHorta: Array<Horta>;
  busca = {
    Data_Inicial: '',
    Data_Final: ''
  }

  constructor(private hortaService: HortaServiceService) { }

  ngOnInit() {
  }

  atualizar() {
    console.log(this.busca.Data_Final);
    console.log(this.busca.Data_Inicial);
    this.hortaService.getFindByData(this.busca.Data_Inicial, this.busca.Data_Final).subscribe(r =>{
      if (r == null) {
        alert('Dados inválidos.');
      } else {
        this.arrayHorta = r;
      }
    },
      err => {
        console.log('Error: ' + err);
        alert('Dados inválidos.');
      
    });
  }
}
