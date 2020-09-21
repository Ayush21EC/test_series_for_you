import { Component, OnInit, Input, Output } from '@angular/core';
import { ChildToParentService } from '../child-to-parent.service';
@Component({
  selector: 'app-footerz',
  templateUrl: './footerz.component.html',
  styleUrls: ['./footerz.component.css'],
  providers:[]

})
export class FooterzComponent implements OnInit {
elementStatus :boolean
 varz1:boolean
  constructor(private  servz:ChildToParentService) { }
  

  ngOnInit(): void 
  {   
          this.elementStatus= this.servz.footStatus=false
          setInterval(()=>{
            
          this.elementStatus=this.servz.footStatus
        
        },1000)
 }

}
