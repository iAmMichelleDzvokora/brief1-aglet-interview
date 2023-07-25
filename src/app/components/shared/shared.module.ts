import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NiceSelectModule } from 'ng-nice-select';
import { SlickCarouselModule } from 'ngx-slick-carousel';


import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BreadcrumbModule,
    FormsModule,
    NgxSliderModule,
    NiceSelectModule,
    SlickCarouselModule
  ],
  exports:[
    HeaderComponent,
  ]
})
export class SharedModule { }
