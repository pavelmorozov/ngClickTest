import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(document:touchstart)': 'onTouchStart($event)'
  }
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
  }
}