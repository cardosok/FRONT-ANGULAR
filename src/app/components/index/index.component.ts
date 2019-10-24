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
    this.hortaService.getAll().subscribe(r =>{
      if (r == null) {
       // alert('Dados inválidos.');
      } else {
        this.arrayHorta = r;
        this.data.changeMessage(this.arrayHorta);
      }
    },
      err => {
        console.log('Error: ' + err);
        //alert('Dados inválidos.');
      
    });
  }

  atualizar() {
    console.log(this.busca);
    let tes = (this.busca.Hora_Inicial).split(":");
    let t = this.busca.Data_Inicial+'T'+this.busca.Hora_Inicial+'TZD';
   console.log(t);
   //YYYY-MM-DDThh:mmTZD
    let tess = new Date(t);

    let l = new Date(tess);
    console.log(l);

    let dataComHora =  this.datePipe.transform(this.busca.Data_Inicial,"yyyy-MM-dd");
   // console.log(dataComHora);
    
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
        //alert('Dados inválidos.');
      
    });
  }
  limpar(){
    this.busca.Data_Inicial = this.datePipe.transform(new Date(),"yyyy-MM-dd");
    this.busca.Data_Final = this.datePipe.transform(new Date(),"yyyy-MM-dd");
    this.atualizar();
  }
}
