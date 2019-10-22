import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HortaServiceService } from '../../service/horta-service.service';
import { Horta } from '../../model/horta';
import { DataService } from 'src/app/service/data.service';


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

  message:Array<Horta> = [{
    umidade: 200,
    temperaturaDoAr:200,
    date: new Date(),
    umidadeDoSolo:""
  }];

  constructor(private hortaService: HortaServiceService, private data: DataService) { }

  ngOnInit() {
    this.hortaService.getAll().subscribe(r =>{
      if (r == null) {
        alert('Dados inválidos.');
      } else {
        this.arrayHorta = r;
        this.data.changeMessage(this.arrayHorta);
      }
    },
      err => {
        console.log('Error: ' + err);
        alert('Dados inválidos.');
      
    });
  }

  atualizar() {
    console.log(this.busca.Data_Final);
    console.log(this.busca.Data_Inicial);
    this.hortaService.getFindByData(this.busca.Data_Inicial, this.busca.Data_Final).subscribe(r =>{
      if (r == null) {
        alert('Dados inválidos.');
      } else {
        this.arrayHorta = r;
        this.data.changeMessage(this.arrayHorta);
      }
    },
      err => {
        console.log('Error: ' + err);
        alert('Dados inválidos.');
      
    });
  }
  limpar(){
    this.busca.Data_Inicial = '';
    this.busca.Data_Final = '';
    this.atualizar();
  }
}
