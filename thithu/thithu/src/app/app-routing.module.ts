import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCinemaComponent} from "./cinema/list-cinema/list-cinema.component";
import {CreateCinemaComponent} from "./cinema/create-cinema/create-cinema.component";
import {DeleteCinemaComponent} from "./cinema/delete-cinema/delete-cinema.component";


const routes: Routes = [
  {
    path: "cinema",
    component: ListCinemaComponent
  },
  {
    path: "cinema/create",
    component: CreateCinemaComponent
  },
  {
    path: "cinema/delete/:id",
    component: DeleteCinemaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
