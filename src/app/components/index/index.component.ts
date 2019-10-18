import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HortaServiceService } from '../../service/horta-service.service';
import { Horta } from '../../model/horta';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private hortaService: HortaServiceService) { }

  ngOnInit() {  }
}


