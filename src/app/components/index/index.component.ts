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
  busca = {
    Data_Inicial: '',
    Data_Final: ''
  }

  constructor(private hortaService: HortaServiceService) { }

  ngOnInit() {
  }

  atualizar() {

  }
}
