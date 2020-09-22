import { Component, OnInit } from '@angular/core';
import { TempstroredataService } from 'src/app/tempstroredata.service';
import { Router } from '@angular/router';
import { ChildToParentService } from '../child-to-parent.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component(
  {
      selector: 'app-login-for-test',
      templateUrl: './login-for-test.component.html',
      styleUrls: ['./login-for-test.component.css'],
      providers:[]
  })
export class LoginForTestComponent implements OnInit
 {
    setJsonObj:any={'test1':[''],'test2':[''],'test3':['']}
      ilogin:any;
      Singup:any;
      namez:string;
      emailz:string;
      passwordz:string;
      status:any='';
      seconds:any
      resp:Subscription

      constructor(private asdf:TempstroredataService,
                  private rout:Router ,
                  private servz:ChildToParentService,
                  private htt:HttpClient,
                  private location:Location
                    )
               
                  {}
      

      ngOnInit(): void 
      {
                  this.servz.getdata()
                  this.ilogin=true;
                  this.Singup=false
                  this.seconds=true
                  setInterval( 
                    ()=>
                    {
                      this.seconds=false
                    },3000)
      }
      SingupDB()
      {

                    this.servz.respons.push({name:this.namez,email:this.emailz,password:this.passwordz})
                    this.htt.put('https://proz-6577a.firebaseio.com/auth.json',this.servz.respons).subscribe()
                    this.htt.put('https://proz-6577a.firebaseio.com/marks/maths/'+this.namez+'.json',this.setJsonObj).subscribe()
                    this.htt.put('https://proz-6577a.firebaseio.com/marks/reasoning/'+this.namez+'.json',this.setJsonObj).subscribe()

                    var vz= setTimeout(
                                       () => {
                                                this.servz.getdata()
                                                clearTimeout(vz)
                                             }, 3000);
                    this.namez=this.emailz=this.passwordz=null
                    this.loginz()
    }
      SubmitLoginz()
      { 
                   
                      if( this.servz.login(this.namez,this.passwordz))
                      {
                        
                        localStorage.setItem('name',this.namez)
                        this.location.back();
                      }
                      else{        
                          this.status='You entered wrong id or password'
                       var v= setTimeout(
                                    () => {
                                            this.status=''
                                            clearTimeout(v)
                                          }, 3000);
                      }
                      this.namez=this.passwordz=this.emailz=''
                      this.servz.CallSpecificMarksData();
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
