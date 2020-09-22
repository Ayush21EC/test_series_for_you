import { Component, OnInit } from '@angular/core';
import { ChildToParentService } from '../child-to-parent.service';


@Component({
  selector: 'app-maths',
  templateUrl: './maths.component.html',
  styleUrls: ['./maths.component.css'],
  
})
export class MathsComponent implements OnInit {
add:number
temp:any
 tzz:any
 timeout:any
  constructor(private servz:ChildToParentService,) { }

  ngOnInit(): void {
  
  this.add=0 
  
  this.asdf()

}

  asdf()
  {
    
   
  }

  setTestNo(no:string)
  {
    
    this.servz.testNo=no
    this.servz.func()
    this.servz.routTochid=true
  }
  
}
