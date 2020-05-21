import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public productSlides;
  public folders;
  public notes;

  constructor() {
   }

  ngOnInit() {

    this.productSlides = [
      {img: "assets/product/1.jpg"},
      {img: "assets/product/2.jpg"},
      {img: "assets/product/3.jpg"},
      {img: "assets/product/4.jpg"},
      {img: "assets/product/5.jpg"},
      {img: "assets/product/6.jpg"},
      {img: "assets/product/7.jpg"},
      {img: "assets/product/8.jpg"},
      {img: "assets/product/1.jpg"},
      {img: "assets/product/4.jpg"},
      {img: "assets/product/7.jpg"},
      {img: "assets/product/2.jpg"},
      {img: "assets/product/3.jpg"},
      {img: "assets/product/5.jpg"},
      {img: "assets/product/8.jpg"},
      {img: "assets/product/1.jpg"},
      {img: "assets/product/2.jpg"},
      {img: "assets/product/3.jpg"},
      {img: "assets/product/4.jpg"},
      {img: "assets/product/5.jpg"},







      
    ];

    this.folders = [
      {name: "myname",updated:'12-1-12'},
      {name: "myname",updated:'12-1-12'},
      {name: "myname",updated:'12-1-12'},
      {name: "myname",updated:'12-1-12'},
      {name: "myname",updated:'12-1-12'},
      {name: "myname",updated:'12-1-12'}
      
    ];

    this.notes = [
      {name: "myname",updated:'12-1-12'},
      {name: "myname",updated:'12-1-12'},
      {name: "myname",updated:'12-1-12'},
      {name: "myname",updated:'12-1-12'},
      {name: "myname",updated:'12-1-12'},
      {name: "myname",updated:'12-1-12'}
      
    ];
  }

}
