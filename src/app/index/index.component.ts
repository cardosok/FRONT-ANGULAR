import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HortaServiceService } from '../service/horta-service.service';
import { Horta } from '../model/horta';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  chartOptions = {
    responsive: true
  };
  arrayHorta:Array<Horta>
  
  arrayTemperaturaDoAr = [];
  arrayUmidade = [];
  arrayUmidadeDoSolo = [];
  arrayData = [];
  
  newchartData = [
    { data: this.arrayTemperaturaDoAr, label: 'Temperatura Do Ar' },
    { data: this.arrayUmidade, label: 'Umidade do Ar' },
    //{ data: this.arrayUmidadeDoSolo, label: 'Umidade do Solo' }
  ];
  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];
  newchartLabels = this.arrayData;

  constructor(private hortaService: HortaServiceService) { }

  ngOnInit() {
    this.hortaService.getAll().subscribe(r => {
        //console.log(r);
        if (r == null) {
          alert('Dados inválidos.');
        } else {
          this.arrayHorta = r;
          //console.log(this.arrayHorta);
          this.populaArrays(this.arrayHorta);
        }
      },
      err => {
        console.log('Error: ' + err);
        alert('Dados inválidos.');
    });
      var ctx = document.getElementById('myChart');
      let temp_max = [80, 90, 100, 60];
      let temp_min = [15, 20, 30, 50];
  }


  populaArrays (array:Array<Horta>){
   
    array.forEach((horta)=>{
      this.arrayTemperaturaDoAr.push(horta.temperaturaDoAr);
      this.arrayUmidade.push(horta.umidade);
      this.arrayUmidadeDoSolo.push(horta.umidadeDoSolo);
      this.arrayData.push(horta.date);
    });  

    console.log("Array");
    console.log(this.arrayTemperaturaDoAr);
    console.log("Array DATA");
    console.log(this.arrayData);
    
  }

}


