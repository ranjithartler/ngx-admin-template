import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sideNav = 'showNav';
  constructor() { }

  ngOnInit() {
  }
  
  openNav() {
    (this.sideNav == 'showNav') ? this.sideNav = 'hideNav' : this.sideNav = 'showNav';
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
