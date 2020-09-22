import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ChildToParentService } from '../child-to-parent.service';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  flag:number=0
  A1Color:boolean  
  A2Color:boolean
  resp:any
  respons:any

  constructor( private route:Router,
               private servz:ChildToParentService,
               private htt:HttpClient,
               private location:Location) 
               { }

  ngOnInit(): void
   {

        this.servz.callMarksDtata()
            setInterval(
              ()=>{
                      if(!navigator.onLine)
                      {this.route.navigate(['noInternet'])
                        this.flag=1
                        
                        this.servz.LinkStatus=false
                      this.servz.footStatus=true
                      }
                    if((this.flag===1) && (navigator.onLine))
                    {this.location.back()
                      this.flag=0
                      
                      this.servz.LinkStatus=true
                      this.servz.footStatus=false
                    }
                  },500)
        
        this.A1Color=false
        this.A2Color=false
   }

  backColor(st:string)
  {
      if(st==='A1')
      {
        this.A1Color=true
        this.A2Color=false
      
      }
      else if(st==='A2')
      {
        this.A1Color=false
        this.A2Color=true
      }
  }

  clikz()
  {
     this.respons='{"name":"ayush","email":"ayushiswal214"}'
    this.resp=this.htt.put('https://proz-6577a.firebaseio.com/auth.json',this.respons).subscribe()
  }
  
   
}
