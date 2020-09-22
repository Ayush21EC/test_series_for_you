import { Injectable,  OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { RoutingcomnentComponent } from './routingcomnent/routingcomnent.component';
@Injectable({
  providedIn: 'root'
})
export class ChildToParentService implements OnInit
   {        testName:string       
            routTochid:boolean=false
            respons:{name:any,email:string,password:string}[]=[{name:'fgffxgfxgf',email:'ddzx',password:'fxfxd'}]
            statuszz:Boolean
            loginStatus:boolean
            private resp:Subscription
            testNo:string 
            marks:number 
            varSta:string=''
            questSubmit:boolean
            footStatus:boolean
            LinkStatus:boolean
            MarkedLater:{qno:any,statusz:string}={qno:'',statusz:''}
            questionProvided:number=22;
            numberOfQuest:{no:number,statusz:string}[]=[];              
            n:any=1
            clock:boolean=false
            TickedQno:number=null
            ayush:{name:string,surname:string}[] 
            quest:{ques:any,op1:any,op2:any,op3:any,op4:any,crr:any}[]
            lineChartData:any[]
            ngOnInit(): void 
            {
                this.questionProvided=20
                this.login
                this.resp.unsubscribe();
               
        
            }

            callMarksDtata()
            {
              this.htt.get('https://proz-6577a.firebaseio.com/marks/maths/'+localStorage.getItem('name').substring(0,localStorage.getItem('name').length)+'.json').subscribe(
                (resp:any)=>
                  {
                   
                      
                    this.lineChartData.push({ data: resp.test1, label: 'test Paper1' })
                    this.lineChartData.push({ data: resp.test2, label: 'test Paper2' })
                    this.lineChartData.push({ data: resp.test3, label: 'test Paper3' })
                      
                  }
                  )
            }
            constructor(private htt:HttpClient,)
            {

            }
            getdata()
            {
                 
                
                
                this.resp=this.htt.get('https://proz-6577a.firebaseio.com/auth.json').subscribe((response:any)=>{this.respons=response
               
              })
               

              

            }
              
            func()

                  { this.testName='maths'
                
                      this.resp=this.htt.get('https://proz-6577a.firebaseio.com/auth.json').subscribe((responszz:any)=>{this.respons=responszz})
                  

                    this.resp=this.htt.get('https://proz-6577a.firebaseio.com/Bank/maths/b'+this.testNo+'.json').subscribe((response:any)=>{
                                            
                    this.quest=response
                  
                      })
            }
          
            funcForReasoning()
            {
              this.testName='reasoning'
                                  this.resp=this.htt.get('https://proz-6577a.firebaseio.com/auth.json').subscribe((responszz:any)=>{this.respons=responszz})
                              
            
                                this.resp=this.htt.get('https://proz-6577a.firebaseio.com/Bank/reasoning/b'+this.testNo+'.json').subscribe((response:any)=>{
                                                        
                                this.quest=response
                              
                                  })
                        }


                        CallSpecificMarksData()
                        {
                          this.htt.get('https://proz-6577a.firebaseio.com/marks/maths/'+localStorage.getItem('name').substring(0,localStorage.getItem('name').length)+'.json').subscribe((responszz:any)=>{
                             })
                        }

                        UploadSpecificMarksData( data:any)
                        {
                          this.htt.put('https://proz-6577a.firebaseio.com/marks/maths/'+localStorage.getItem('name').substring(0,localStorage.getItem('name').length)+'.json',data).subscribe()
                        }
            login( name:string,password:string):Boolean
            {
              
              this.resp.unsubscribe();
                for(let a=0;a<this.respons.length;a++)
                { 
                        if(this.respons[a].name===name  )
                        {
                            if(this.respons[a].password==password)
                            {
                                this.loginStatus=true
                                this.statuszz=true
                            }
                            
                        }
                        else
                        {
                                 this.statuszz=false
                        }
                }
                
                return this.statuszz
            }

          

}
