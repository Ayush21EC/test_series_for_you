import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { InstructionBeforeTestComponent } from './instruction-before-test/instruction-before-test.component';
import { QuestRepresentComponent } from './quest-represent/quest-represent.component';
import { LoginForTestComponent } from './login-for-test/login-for-test.component';
import { MarksComponent } from './marks/marks.component';
import { QuestChildComponent } from './quest-child/quest-child.component';
import { MathsComponent } from './maths/maths.component';
import { RegesteredComponent } from './regestered/regestered.component';
import { ReasoningComponent } from './reasoning/reasoning.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { OnlineStatusComponent } from './online-status/online-status.component';
import { MathszComponent } from './my-account/mathsz/mathsz.component';
import { ReasoningzComponent } from './my-account/reasoningz/reasoningz.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/home'  ,pathMatch:'full' },
   
    {path:'account',component:MyAccountComponent,  children:
            [           
            {path:'mathsz',component:MathszComponent},
            {path:'reasoningz',component:ReasoningzComponent} ,
            {path:'',component:MathszComponent},

            ]
    },
     
    {path:'noInternet',component:OnlineStatusComponent},
    {path:'login',component:LoginForTestComponent},
    {path:'maths',component:MathsComponent},
    
    {path:'home',component:HomePageComponent,children:
          [           
          {path:'maths',component:MathsComponent},
          {path:'reasoning',component:RegesteredComponent} ,
          {path:'reasoning/maths',component:MathsComponent} ,
          {path:'maths/reasoning',component:ReasoningComponent},
          {path:'maths/chid',component:QuestChildComponent},
          {path:'account',component:MyAccountComponent}

          ]
    },
          
    {path:'test',component:QuestRepresentComponent},

    {path:'chid',component:QuestChildComponent,children:
      [
        {path:'',component:InstructionBeforeTestComponent},
        {path:'test/marks',component:MarksComponent},
        {path:'test',component:QuestRepresentComponent},
      ]
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
