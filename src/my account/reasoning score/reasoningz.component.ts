import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-reasoningz',
  templateUrl: './reasoningz.component.html',
  styleUrls: ['./reasoningz.component.css']
})
export class ReasoningzComponent implements OnInit
 {  
            NameInitial:string
            Name:string
            email:string
            b:any
            i:number
            lineChartData: ChartDataSets[] = [
              { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
            ];

            lineChartLabels: Label[] = ['','Attempt 1', 'Attempt 2', 'Attempt 3', 'Attempt 4', 'Attempt 5', 'Attempt 6'];

            lineChartOptions = {
              responsive: true,
            };

            lineChartColors: Color[] = [
              {
                borderColor: 'black',
                backgroundColor: 'rgba(255,255,0,0.28)',
              },
            ];

            lineChartLegend = false;
            lineChartPlugins = [];
            lineChartType = 'line';

            constructor(
                          private htt:HttpClient,
                          private a:Router)
                          {  }

  ngOnInit(): void
    { 
      
          
        this.i=0
        this.htt.get('https://proz-6577a.firebaseio.com/marks/reasoning/'+localStorage.getItem('name').substring(0,localStorage.getItem('name').length)+'.json').subscribe(
                (resp:any)=>
                  {
                   
                    this.lineChartData.push(
                                            { 
                                              data: resp.test2, label: 'test Paper 1 Results',
                                               borderColor: 'rgb(82, 11, 122)',
                                               fill:false
                                              })

                    this.lineChartData.push(
                                            { 
                                              data: resp.test1, label: 'test Paper 2 Results' ,
                                              borderColor:'rgb(31, 170, 180)',
                                              fill:false
                                            })
                    this.lineChartData.push(
                                            { 
                                              data: resp.test3,
                                              label: 'test Paper 3 Results',
                                              borderColor:'rgb(143, 113, 32)' ,
                                              fill:false 
                                            })
                    this.lineChartData.splice(0,1)
                  }
                  )
     
    }
     
  }

 
 


  


