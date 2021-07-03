import { Component, OnInit, Input, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
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
      transition('* => *', animate('0.5s ease-out'))
    ]),
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [ApplicationStateService],
})
export class NavigationComponent implements OnInit, AfterViewInit {

  @ViewChild('navigationContainer') navigationContainer : ElementRef;
  @ViewChild('firstNavigationItem') firstNavigationItem : ElementRef;
  @ViewChild('burger') burger : ElementRef;
  @ViewChild('languageSelector', { read: ElementRef }) languageSelector : ElementRef;
  @Input() maxHeight: string = '200px';
  
  public desiredMarginTopDistance = "0px";
  public firstNavigationItemHeight = 35;

  constructor(
    public applicationStateService: ApplicationStateService,
    private renderer: Renderer2
    ) { }
  
  isOpen = false;
  
  ngOnInit() : void {
    if( !this.applicationStateService.getIsMobileResolution() ) {
      this.isOpen = true;
    }
  }

  ngAfterViewInit(): void  {
    setTimeout(() => {

      // Get height of the first item in the navigation for the burger-icon size 
      // and the language selector on the desktop version
      this.firstNavigationItemHeight = this.firstNavigationItem.nativeElement.scrollHeight;

      // Lift position of the language selector up so it's at the same height as the navigation
      if( !this.applicationStateService.getIsMobileResolution() ) {        
        var desiredMarginTop = 0 - this.firstNavigationItemHeight;
        console.log(desiredMarginTop);
        this.desiredMarginTopDistance = desiredMarginTop.toString() + "px";
      }


      // Optimize height for burger menu
      var navigationHeight = this.navigationContainer.nativeElement.scrollHeight;
      this.maxHeight =  navigationHeight.toString() + "px";
      }, 1)
  }

  toggleNavigation() {
    this.isOpen = !this.isOpen;
  }

  getAnimationStatus() {
    return this.isOpen? 'open' : 'closed';
  }
}
