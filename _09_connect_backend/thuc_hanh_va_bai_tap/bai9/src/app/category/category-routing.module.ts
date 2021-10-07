import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryCreateComponent} from "./category-create/category-create.component";
import {CategoryEditComponent} from "./category-edit/category-edit.component";
import {CategoryDeleteComponent} from "./category-delete/category-delete.component";

const routes: Routes = [
  {
    path: 'list',
    component: CategoryListComponent
  },
  {
    path: 'create',
    component: CategoryCreateComponent
  },
  {
    path: 'edit/:id',
    component: CategoryEditComponent
  },
  {
    path: 'delete/:id',
    component: CategoryDeleteComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CategoryRoutingModule { }
