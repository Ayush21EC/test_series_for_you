import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TempstroredataService } from 'src/app/tempstroredata.service';
import { ChildToParentService } from '../child-to-parent.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-quest-represent',
  templateUrl: './quest-represent.component.html',
  styleUrls: ['./quest-represent.component.css'] ,
  providers:[]

})
export class QuestRepresentComponent implements OnInit 
{
  EachCarryMark:number=5
  r:any
  datazz:any
  questNotifi:boolean=false
  
  marks:number=0 
  az=0 
  arr:number[]
  optionz:{quest:number,option:string}[]=[{quest:0,option:'100'}]
  questionbook:any[];
  tickstatus:{qno:number,sta:string}={qno:null,sta:''}
  optionSelected:[{ques:any,option:any}]=[{ques:null,option:null}];
  a=4
  unmark:any
  
  
  constructor(private asdf:TempstroredataService,
    private servz:ChildToParentService,
    private rout :Router,
    private htt:HttpClient) 
  { }
   
  ngOnInit(): void {this.marks=0
    this.questionbook=this.servz.quest;
    this.unmark=null
    this.servz.LinkStatus=this.servz.clock=false
     this.servz.footStatus=true
     this.r=setInterval(
      ()=>{
              console.log(this.servz.clock+'   clock')
              if(this.servz.clock)
              {
               
                   document.getElementById('sub').click()
                  clearInterval(this.r)
                 
              }
          },1000)
          this.datazz=this.servz.CallSpecificMarksData
  } 
  toggleQuestNotify()
  {
    if(this.questNotifi==true)
    {
      this.questNotifi=false
    }
    else
    {
      this.questNotifi=true
    }
  }
  InfoAboutAns(Qno:any,optionSelectz:any)
  {  
              this.servz.TickedQno=Qno+1
       
          for(let i=0;i<this.optionz.length;i++)
          {
                 if(this.optionz[i].quest===Qno)
                 {
                            this.optionz[i].option=optionSelectz.target.value
                            this.az++
                 }
           }
                       
           if(this.az==0)
            {
                  this.optionz.push({quest:Qno,option:optionSelectz.target.value})
                   this.az=0;
             }
            this.az=0;
          
  }
 
  markz(varz:any)
  {
    this.servz.MarkedLater.qno=varz+1
    this.servz.MarkedLater.statusz='Later'
  }

  
 giveOut()
 {             clearInterval(this.r)

   
          for(let i=0;i<this.optionz.length;i++)
           { 
                if(this.optionz[i].option==this.questionbook[this.optionz[i].quest].crr)
                {
                    
                    this.marks=this.marks+1
                } 
            }
           this.servz.questSubmit=this.servz.LinkStatus=true
            this.servz.footStatus=this.servz.clock=false
           this.servz.marks=this.marks
         
          this.htt.get('https://proz-6577a.firebaseio.com/marks/'+this.servz.testName+'/'+localStorage.getItem('name').substring(0,localStorage.getItem('name').length)+'/test'+this.servz.testNo+'.json').subscribe((responszz:any)=>{this.datazz=responszz
          this.datazz.push(this.marks*this.EachCarryMark)
           

        })
        var thiszzInterval=setInterval(()=>{
          this.htt.put('https://proz-6577a.firebaseio.com/marks/'+this.servz.testName+'/'+localStorage.getItem('name').substring(0,localStorage.getItem('name').length)+'/test'+this.servz.testNo+'.json',this.datazz).subscribe()

          clearInterval(thiszzInterval)},2000)
           
          
           
           
   }
}