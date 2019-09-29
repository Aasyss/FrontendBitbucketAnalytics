import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {Router, NavigationEnd, NavigationStart} from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;
    hideElement = true;
    showElement = false;
    hide = true;
    slug : any;

    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(public router: Router) {
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });

      this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart){
          this.hideElement = false;
        }
      });

      this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart){
          this.showElement = true;
        }
      });
    }

    ngOnInit() {
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        this.hide = true;
        this.slug= this.getSlug()
    }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    getSlug(){
        return localStorage.getItem('slug');
    }
}
