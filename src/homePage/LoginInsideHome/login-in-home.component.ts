import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChildToParentService } from 'src/app/child-to-parent.service';
import { TempstroredataService } from 'src/app/tempstroredata.service';

@Component({
  selector: 'app-login-in-home',
  templateUrl: './login-in-home.component.html',
  styleUrls: ['./login-in-home.component.css']
})
export class LoginInHomeComponent implements OnInit {
  ilogin:any;
  Singup:any;
  namez:string;
  emailz:string;
  passwordz:string;
  status:any='';
  seconds:any;
  resp:Subscription
  constructor(private asdf:TempstroredataService,private rout:Router ,private servz:ChildToParentService,private htt:HttpClient){}
  

  ngOnInit(): void 
  {this.servz.getdata()
    this.ilogin=true;
    this.Singup=false
    this.seconds=true
    setInterval( ()=>{this.seconds=false},3000)
  }
  SingupDB()
  {

  this.servz.respons.push({name:this.namez,email:this.emailz,password:this.passwordz})
   this.htt.put('https://proz-6577a.firebaseio.com/auth.json',this.servz.respons).subscribe()
   var vz= setTimeout(() => {
      this.servz.getdata()
     
       clearTimeout(vz)
    }, 3000);
  }
  SubmitLoginz()
  { 
     
    if( this.servz.login(this.namez,this.passwordz))
    {
      
      localStorage.setItem('name',this.namez)
    }
    else{        
        this.status='You entered wrong id or password'
      setTimeout(() => {
        this.status=''
      }, 3000);
     }
    this.namez=this.passwordz=this.emailz=''
  }
  nameEnterFromLoginz:any='true';

  loginz()
  {
    this.ilogin=true;
    this.Singup=false
  }
  singUPZ()
  {
    this.ilogin=false;
    this.Singup=true
  }
 


}
