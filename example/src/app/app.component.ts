import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


	@ViewChild('top') elementToFocusAfterRouting;

  ariaCurrent1:string = null;
  ariaCurrent2:string = null;
  ariaCurrent3:string = null;
  ariaCurrent4:string = null;


 setCurrentRouterLink(componentName) {
    //Set aria-current
    //Reset aria-current on all router links first
      this.ariaCurrent1 = null;
      this.ariaCurrent2 = null;
      this.ariaCurrent3 = null;
      this.ariaCurrent4 = null;


    if (componentName === "component 1") {
        this.ariaCurrent1 =  "page"; 
    } 
    if (componentName === "component 2") {
        this.ariaCurrent2 =  "page"; 
    }
    if (componentName === "component 3") {
        this.ariaCurrent3 =  "page"; 
    }
    if (componentName === "component 4") {
        this.ariaCurrent4 =  "page"; 
    }
 }


}
