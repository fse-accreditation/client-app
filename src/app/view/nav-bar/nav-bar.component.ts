import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
@Output() onDrawerClick =new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
 
  ngAfterViewInit(): void {

  }

  onToggleDrawerClick():void{
    console.log('click on drawer');
    this.onDrawerClick.emit({type:'onclick'});
  }

}
