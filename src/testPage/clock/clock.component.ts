import { Component, OnInit, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ChildToParentService } from 'src/app/child-to-parent.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  providers:[]
})

export class ClockComponent implements OnInit {
  l:any
  minitues:number;
  hour:number;
  second:number;
  constructor(private pt:Router,private servz:ChildToParentService) { }

  

  ngOnInit(): void {
    this.minitues=0;
    this.hour=0;
    this.second=0;
    this.l=setInterval(()=>{
      if(this.second==60)
      {
        this.second=0;
        if(this.minitues==60)
        {
            this.minitues=0;
            if(this.hour==60)
            {     
                      this.hour=0;
                      this.minitues=0;
                      this.second=0;
            }
            else
            {
              this.hour++;
            }
        }
        else{
        this.minitues++
         } 
     }else
      {this.second++;}
    
    if(this.second>10)
    {  
      this.hour=this.minitues=this.second=0
       this.servz.clock=true
       clearInterval(this.l)
    }
    
    
    },1000);
    
   
  }

}
