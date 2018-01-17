import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
//  ,
//  host: {
//    '(document:touchstart)': 'onTouchStart($event)'
//  }
})
export class AppComponent {
  title = 'app';
  flagCollapse = true;

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  onClick(){
    console.log("onClick");
  }

  @HostListener('document:touchstart', ['$event'])
  onTouchStart(ev) {
    console.log("HostListener document:touchstart");
    /*
    * Long operation not
    * prevent other 
    * event listeners calls
    */
    var n:number = 1; 
    var limit:number = 100000
    while(n < limit) { 
       n++;
       var m:number = 1;
       while (m<limit){
         m++
       }
    }

  }

  @HostListener('document:touchend', ['$event'])
  onTouchEnd(ev) {
    console.log("HostListener document:touchend");
  }
}