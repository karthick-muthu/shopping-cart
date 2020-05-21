import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public slides;
  public slideConfig;
  public productSlideConfig;
  public productSlides;
  public productTrends;
  constructor() { }

  ngOnInit() {
    this.slides = [
      {img: "assets/slidershow/slideshow1_1920x648.webp"},
      {img: "assets/slidershow/slider1.jpg"},
      {img: "assets/slidershow/slide3_1920x980.webp"},
      {img: "assets/slidershow/slider2.jpg"},
      {img: "assets/slidershow/slidebanner-2.jpg"},
      {img: "assets/slidershow/slide1_1920x680.webp"}
    ];
    this.productSlides = [
      {img: "assets/product/1.jpg"},
      {img: "assets/product/2.jpg"},
      {img: "assets/product/3.jpg"},
      {img: "assets/product/4.jpg"},
      {img: "assets/product/5.jpg"},
      {img: "assets/product/6.jpg"},
      {img: "assets/product/7.jpg"},
      {img: "assets/product/8.jpg"},
      
    ];
    this.productTrends = [
      {img: "assets/product/5.jpg"},
      {img: "assets/product/6.jpg"},
      {img: "assets/product/7.jpg"},
      {img: "assets/product/8.jpg"},
      {img: "assets/product/1.jpg"},
      {img: "assets/product/2.jpg"},
      {img: "assets/product/3.jpg"},
      {img: "assets/product/4.jpg"}
      
    ];

    this.slideConfig = {'slidesToShow': 1, 'slidesToScroll': 1,
    'autoplay': true, 'autoplaySpeed': 3500, 'infinite': true,
    'mobileFirst': false,'respondTo': 'window',
    'rows': 1, 
    'responsive': [{
      'breakpoint': 600,
      'settings': {    
          'slidesToShow': 1,
          'slidesToScroll': 1,
          'arrows': true,
          'dots': true
        }
      }]
  };
  this.productSlideConfig = {'slidesToShow': 4, 'slidesToScroll': 1,
    'autoplay': false, 'autoplaySpeed': 3500, 'infinite': true,
    'mobileFirst': false,'respondTo': 'window',
    'rows': 1, 
    'responsive': [{
      'breakpoint': 600,
      'settings': {    
          'slidesToShow': 4,
          'slidesToScroll': 1,
          'arrows': true,
          'dots': false
        }
      }]
  };
  }

 
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }











  

}
