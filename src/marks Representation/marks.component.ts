import { Component, OnInit } from '@angular/core';
import { ChildToParentService } from '../child-to-parent.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {
marks:number;
i:any=0;
  constructor(private servz:ChildToParentService) { }

  ngOnInit(): void { 
this.marks=this.servz.marks
this.marks=this.marks*5
this.barChartData[0].data.push(10)
this.barChartData[0].data.push(this.marks)
this.barChartData[0].data.push(this.i)
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Average', 'Scored'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];


  barChartData: ChartDataSets[] = [
  
    { data:[] , label:'Scored Result'}
  ];

}