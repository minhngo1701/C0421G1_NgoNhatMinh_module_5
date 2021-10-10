import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {EditCustomerComponent} from "./customer/edit-customer/edit-customer.component";
import {DeleteCustomerComponent} from "./customer/delete-customer/delete-customer.component";
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";



const routes: Routes = [
  // {
  //   path: 'employee',
  //   component: ListEmployeeComponent
  // },
  // {
  //   path: 'employee/create',
  //   component: EmployeeCreateComponent
  // },
  // {
  //   path: 'employee/edit/:id',
  //   component: EditEmployeeComponent
  // },
  // {
  //   path: 'employee/delete/:id',
  //   component: DeleteEmployeeComponent
  // },
  {
    path: 'customer',
    component: ListCustomerComponent
  },
  {
    path: 'customer/create',
    component: CreateCustomerComponent
  },
  {
    path: 'customer/edit/:id',
    component: EditCustomerComponent
  },
  {
    path: 'customer/delete/:id',
    component: DeleteCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
