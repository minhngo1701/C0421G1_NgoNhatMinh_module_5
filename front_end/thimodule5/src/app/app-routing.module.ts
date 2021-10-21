import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {ListGarageComponent} from './component/list-garage/list-garage.component';
import {DeleteGarageComponent} from './component/delete-garage/delete-garage.component';
import {UpdateGarageComponent} from './component/update-garage/update-garage.component';
import {CreateGarageComponent} from './component/create-garage/create-garage.component';


const routes: Routes = [
  {
    path:"",
    component: HomePageComponent
  },
  {
    path: 'garage',
    component: ListGarageComponent
  },
  {
    path: 'garage/create',
    component: CreateGarageComponent
  },

  {
    path: 'garage/edit/:id',
    component: UpdateGarageComponent
  },
  {
    path: 'garage/delete/:id',
    component: DeleteGarageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
