import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ApplicationStateService } from '../application-state.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navigation',
  animations: [
    trigger('openClose', [
      state('open', 
      style({maxHeight: '{{max_height}}',
        }), {params: {max_height: '200px'}}),
      state('closed', style({
        maxHeight: '0'
      })),
      transition('* => *', animate('1s ease-out'))
    ]),
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [ApplicationStateService],
})
export class NavigationComponent implements OnInit, AfterViewInit {

  @Input() maxHeight: string = '200px';
  
  constructor(public applicationStateService: ApplicationStateService) { }
  
  isOpen = false;
  
  ngOnInit() : void {
    if(!this.applicationStateService.getIsMobileResolution()) {
      this.isOpen = true;
    }
  }

  ngAfterViewInit(): void  {
    var navigationHeight = document.getElementById("navigation-container").offsetHeight.toString();
    this.maxHeight =  navigationHeight + "px";
  }

  toggleNavigation() {
    this.isOpen = !this.isOpen;
  }

  getAnimationStatus() {
    return this.isOpen? 'open' : 'closed';
  }
}
