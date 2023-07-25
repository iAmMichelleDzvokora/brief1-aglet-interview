import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/pages/contacts/contacts.component';

const routes: Routes = [
  // Home
  { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
