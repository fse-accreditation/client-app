import { Component, OnInit,TemplateRef, ViewChild,AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu-drawer',
  templateUrl: './menu-drawer.component.html',
  styleUrls: ['./menu-drawer.component.css']
})
export class MenuDrawerComponent implements OnInit,AfterViewInit {
  @ViewChild('drawer',{static:true}) drawer : any;
  showFiller=false;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() : void{

  }

}
