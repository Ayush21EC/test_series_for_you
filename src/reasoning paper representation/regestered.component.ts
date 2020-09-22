import { Component, OnInit } from '@angular/core';
import { ChildToParentService } from '../child-to-parent.service';

@Component({
  selector: 'app-regestered',
  templateUrl: './regestered.component.html',
  styleUrls: ['./regestered.component.css']
})
export class RegesteredComponent implements OnInit {

  constructor(private servz:ChildToParentService) { }

  ngOnInit(): void {

  }
  setTestNo(no:string)
  {
    
    this.servz.testNo=no
    this.servz.funcForReasoning()
    this.servz.routTochid=true
  }
}
