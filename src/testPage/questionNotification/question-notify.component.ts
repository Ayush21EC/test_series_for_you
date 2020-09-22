import { Component, OnInit } from '@angular/core';
import { TempstroredataService } from 'src/app/tempstroredata.service';
import { ChildToParentService } from 'src/app/child-to-parent.service';

@Component({
  selector: 'app-question-notify',
  templateUrl: './question-notify.component.html',
  providers:[TempstroredataService]
})
export class QuestionNotifyComponent implements OnInit {
  numberOfQuest:{no:number,status:string}[]=[{no:1,status:'unticked'}];              
  //status:ticked:green,unticked:yellow,marker:red
  questionProvided:number;
  temp:any
  constructor(private asd:TempstroredataService,private srvz: ChildToParentService) { }

   vvv(status:string)
  {
    if(status=='ticked')
    { return 'green'; }
    else if(status=='unticked')
    {return 'yellow'}
    else if(status=='Later')
    {return 'red'}
  }
  ChangeStatus(numberVlaue:number,statusValue:string)
  {
    this.numberOfQuest[numberVlaue].status=statusValue;
   
  }
  changetatusz()
  {
    this.numberOfQuest[15].status='Later'
  }
  ngOnInit(): void {
   
        this.questionProvided=this.srvz.questionProvided;
   
   
    for(let i=2;i<=this.questionProvided;i++)
     {
       this.numberOfQuest.push({no:i,status:'unticked'});
    
      }

    setInterval(()=>{
      if(this.srvz.MarkedLater.qno!='')
      {
        for(let i=0;i<this.numberOfQuest.length;i++)
        {
        
          if(this.numberOfQuest[i].no==this.srvz.MarkedLater.qno)
          {
            if(this.numberOfQuest[i].status==='Later')
            {
              
              this.numberOfQuest[i].status='unticked'

            }
            else if(this.numberOfQuest[i].status!='Later'){
            this.numberOfQuest[i].status=this.srvz.MarkedLater.statusz
          }
           
            this.srvz.MarkedLater.qno=this.srvz.MarkedLater.statusz=''
          }
       
         }
   
      }
      if(this.srvz.TickedQno!=null)
      {
        for(let i=0;i<this.numberOfQuest.length;i++)
        {
          if(this.numberOfQuest[i].no==this.srvz.TickedQno)
          {
            this.numberOfQuest[i].status='ticked'
            this.srvz.TickedQno=null
          }

        }

      }
    })
     
  }
  
     
   
}
