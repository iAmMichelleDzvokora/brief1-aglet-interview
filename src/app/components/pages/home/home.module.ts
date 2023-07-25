import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { ContactsComponent } from '../contacts/contacts.component';
import { AgletCases } from './aglet-cases/aglet-cases.component';

@NgModule({
  declarations: [HomeComponent, AgletCases, ContactsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
  ],
})
export class HomeModule {}
