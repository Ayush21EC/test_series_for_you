import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ChildToParentService } from '../child-to-parent.service';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  NameInitial:string
  Name:string=localStorage.getItem('name')
  email:string
  b:any
  i:number
  
  
  constructor(private htt:HttpClient,private a:Router,private servz:ChildToParentService)
   {  }

  ngOnInit(): void
    {  
     
       



      this.NameInitial=localStorage.getItem('name').substring(0,1)

      if(localStorage.getItem('name')==='null'||localStorage.getItem('name')==='undefine')
      {
        this.a.navigate(['/login'])
      }
      for(let i=0;i<10;i++)
      {
        if(this.servz.respons[i].name===localStorage.getItem('name'))
        {
          this.email=this.servz.respons[i].email
          console.log(this.Name+' '+this.email)
        } 
       } 
        this.i=0
      
     
  }

 
 


  

}
