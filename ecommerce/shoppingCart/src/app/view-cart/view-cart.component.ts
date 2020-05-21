import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {

  public hideMenu;
  constructor() { }

  ngOnInit() {

    this.hideMenu = false;
  }

}
