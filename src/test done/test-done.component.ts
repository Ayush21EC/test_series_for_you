import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-done',
  templateUrl: './test-done.component.html',
  styleUrls: ['./test-done.component.css']
})
export class TestDoneComponent implements OnInit {
  questionDataz:any;
  StringData:string='sendData'

  constructor(private httpz:HttpClient) { }

  ngOnInit(): void {
  }

  

  
}
