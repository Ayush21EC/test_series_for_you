import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FooterzComponent } from '../footerz/footerz.component';
import { TempstroredataService } from 'src/app/tempstroredata.service';
import { ChildToParentService } from '../child-to-parent.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-routingcomnent',
  templateUrl: './routingcomnent.component.html',
  styleUrls: ['./routingcomnent.component.css'],
  providers:[TempstroredataService]

})
export class RoutingcomnentComponent implements OnInit {
var:boolean
LinkStatu:boolean

  constructor(private asd:TempstroredataService, 
    private servz:ChildToParentService,
    private rout:Router) { }
linkz:any
  ngOnInit(): void {
    this.linkz=this.servz.LinkStatus
  
   var inter= setInterval(()=>
    {
      if(this.servz.routTochid===true)
      {
        this.rout.navigate(['chid'])
        this.servz.routTochid=false
      }
    },100)
this.LinkStatu=this.servz.LinkStatus=true
setInterval(()=>{this.LinkStatu=this.servz.LinkStatus},1)
   }
   callTest()
   {
this.rout.navigate(['chid'])
   }
  mutez()
  {
    this.LinkStatu=true
    this.servz.footStatus=true
  this.servz.LinkStatus=true
  }
}
