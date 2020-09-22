import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error("Method not implemented.");
  }
  ShOrNot:boolean
  
 m:any
  FooterStatus:any;
  NavStatus:boolean

  ngOnInit(): void {
    this.ShOrNot=true
    localStorage.setItem('name',null)
  }
  changeStataus()
  {
    if(this.ShOrNot==true)
{    this.ShOrNot=false
}
else{
  this.ShOrNot=true
}  
}
changeStatausz()
{console.log('chanz')
  this.ShOrNot=true

}
testLoaded( val:boolean)
{
  console.log('ayush'+ val)
    this.ShOrNot=val
  
}
}
