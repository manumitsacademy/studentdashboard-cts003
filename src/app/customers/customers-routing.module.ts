import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomerslistComponent } from './customerslist/customerslist.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'customerslist', component: CustomerslistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
