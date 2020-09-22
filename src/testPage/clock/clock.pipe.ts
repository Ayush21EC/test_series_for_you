import { PipeTransform, Pipe } from '@angular/core';
@Pipe({name:'hourz'})
export class zzz implements PipeTransform
{
    transform(sec:number) {
        // setTimeout(() => {
        //     sec++
        // }, 1000);
        // setTimeout(() => {
        //     min++
        // }, 60000);
        setTimeout(() => {
            sec++
        }, 1000);
        return sec;
    }
   
    
}