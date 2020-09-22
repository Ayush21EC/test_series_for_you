import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instruction-before-test',
  templateUrl: './instruction-before-test.component.html',
  styleUrls: ['./instruction-before-test.component.css']
})
export class InstructionBeforeTestComponent implements OnInit {

  constructor(private a:Router) { }

  ngOnInit(): void {
   
      if(localStorage.getItem('name')==='null'||localStorage.getItem('name')==='undefine')
      {
        this.a.navigate(['/login'])
      }
  }

}
