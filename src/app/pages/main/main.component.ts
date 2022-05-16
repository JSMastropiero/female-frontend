import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import { jarallax, jarallaxElement } from 'jarallax';
import 'jarallax';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';
declare var jarallax: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('owlCar') carousel!: any;

  tabs = ['TODOS', 'VIDEOS', 'AUDIOS' , 'LIBROS', 'DOCUMENTOS']
  items = [0,1,2,3]
  items2 = [0,1,2]
  customOptions: OwlOptions = {
    startPosition: 0,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    center: false,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

  customOptions2: OwlOptions = {
    startPosition:0,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 900,
    navText: ['', ''],
    center: false,
    autoWidth: true,
    margin:20,
    autoplay:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.8,
      imgPosition: "left bottom"
    });

    
  }

}
