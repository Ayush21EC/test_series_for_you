import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginInHomeComponent } from './home-page/login-in-home/login-in-home.component';
import { TestDoneComponent } from './test-done/test-done.component';
import { RoutingcomnentComponent } from './routingcomnent/routingcomnent.component';
import { RegesteredComponent } from './regestered/regestered.component';
import { LoginForTestComponent } from './login-for-test/login-for-test.component';
import { InstructionBeforeTestComponent } from './instruction-before-test/instruction-before-test.component';
import { QuestRepresentComponent } from './quest-represent/quest-represent.component';
import { FooterzComponent } from './footerz/footerz.component';
import { MarksComponent } from './marks/marks.component';
import { zzz } from './quest-represent/clock/clock.pipe';
import { ClockComponent } from './quest-represent/clock/clock.component';
import { QuestChildComponent } from './quest-child/quest-child.component';
import { QuestionNotifyComponent } from './question-notify/question-notify.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {ChartsModule} from 'ng2-charts';
import { MathsComponent } from './maths/maths.component';
import { ReasoningComponent } from './reasoning/reasoning.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { OnlineStatusComponent } from './online-status/online-status.component';
import { MathszComponent } from './my-account/mathsz/mathsz.component';
import { ReasoningzComponent } from './my-account/reasoningz/reasoningz.component';
@NgModule({
  declarations: [
    RoutingcomnentComponent,
    AppComponent,
    RoutingcomnentComponent,  
    RegesteredComponent,
    ClockComponent,
    zzz,   
     QuestionNotifyComponent,     
      TestDoneComponent, 
    LoginForTestComponent,
    HomePageComponent, 
    InstructionBeforeTestComponent,
    LoginInHomeComponent,
    QuestRepresentComponent,
      FooterzComponent,
      MarksComponent,
       QuestChildComponent,
       MathsComponent,
       ReasoningComponent,
       MyAccountComponent,
       OnlineStatusComponent,
       MathszComponent,
       ReasoningzComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    BrowserAnimationsModule,
    ChartsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
