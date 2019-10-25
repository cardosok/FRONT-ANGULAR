import { Component, OnInit, Output, EventEmitter, ModuleWithComponentFactories, destroyPlatform } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HortaServiceService } from '../../service/horta-service.service';
import { Horta } from '../../model/horta';
import { DataService } from 'src/app/service/data.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  arrayHorta: Array<Horta>;
  busca = {
    Data_Inicial:this.datePipe.transform(new Date(),"yyyy-MM-dd") ,
    Data_Final: this.datePipe.transform(new Date(),"yyyy-MM-dd"),
    Hora_Inicial: '00:00',
    Hora_Final: '00:00'
  }

  constructor(private hortaService: HortaServiceService, private data: DataService,private datePipe: DatePipe) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.hortaService.getAll().subscribe(r =>{
      if (r == null) {
        alert('Lista Vazia.');
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
    console.log(this.busca);
    //----------------------------------------------------Data Inicial--------------------------------------------------------------//
    let format = this.busca.Data_Inicial+'T'+this.busca.Hora_Inicial;
    let dataEHora = new Date(format);
    //-------------------------------------------------Data Final-------------------------------------------------------------------//
    let formatFinal = this.busca.Data_Final+'T'+this.busca.Hora_Final;
    let dataEHoraFinal = new Date(formatFinal);
    //-----------------------------------------------------------------------------------------------------------------------------//
    this.hortaService.getFindByData(dataEHora, dataEHoraFinal).subscribe(r =>{
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
    this.busca.Data_Inicial = this.datePipe.transform(new Date(),"yyyy-MM-dd");
    this.busca.Data_Final = this.datePipe.transform(new Date(),"yyyy-MM-dd");
    this.getAll();
  }
}
