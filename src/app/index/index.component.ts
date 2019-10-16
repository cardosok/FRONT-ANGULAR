import { Component, OnInit } from '@angular/core';
// import * as CanvasJS from './canvasjs.min';
// import { Chart } from 'canvasjs';
// import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  chart = [];
  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  constructor() { }

  ngOnInit() {
    var ctx = document.getElementById('myChart');

    let temp_max = [80, 90, 100, 60];
    let temp_min = [15, 20, 30, 50];
    // this.chart = new Chart(ctx, {
    //   type: 'pie',
    //   data: {
    //     labels: ["lbl1", "lbl2", "lbl3", "lbl4"],
    //     datasets: [
    //       {
    //         data: temp_max,
    //         borderColor: '#3cba9f',
    //
    //         fill: false
    //       },
    //       {
    //         data: temp_min,
    //         borderColor: '#ffcc00',
    //         fill: false
    //       },
    //     ]
    //   },
    //   options: {
    //     legend: { display: false },
    //     scales: {
    //       ticks: { beginAtZero: true },
    //       xAxes: [{ display: true }],
    //       yAxes: [{ display: true }]
    //     }
    //   }
    // })
    //
    // var ctx2 = document.getElementById('myChart2');
    //
    // var myChart2 = new Chart(ctx2, {
    //   type: 'bar',
    //   data: {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [12, 19, 3, 57, 2, 30],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(255, 206, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(255, 159, 64, 0.2)'
    //       ],
    //       borderColor: [
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(153, 102, 255, 1)',
    //         'rgba(255, 159, 64, 1)'
    //       ],
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       yAxes: [{
    //         ticks: { beginAtZero: true }
    //       }]
    //     }
    //   }
    // });

  }
}
