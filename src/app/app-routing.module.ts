import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './components/private/admin/category/categories-list/categories-list.component';
import { CategoryAddComponent } from './components/private/admin/category/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/private/admin/category/category-update/category-update.component';
import { MyOrdersDetailsComponent } from './components/private/admin/client/my-orders-details/my-orders-details.component';
import { MyOrdersComponent } from './components/private/admin/client/my-orders/my-orders.component';
import { OrdersDetailsComponent } from './components/private/admin/order/orders-details/orders-details.component';
import { OrdersManagementComponent } from './components/private/admin/order/orders-management/orders-management.component';

import { ProductAddComponent } from './components/private/admin/product/product-add/product-add.component';
import { ProductListComponent } from './components/private/admin/product/product-list/product-list.component';
import { ProductUpdateComponent } from './components/private/admin/product/product-update/product-update.component';
import { ClientComponent } from './components/private/client/client.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'admin/category/list', component: CategoriesListComponent
  },
  {
    path: 'admin/category/add', component: CategoryAddComponent
  },
  {
    path: 'admin/category/update', component: CategoryUpdateComponent
  }
  ,

  {
    path: 'admin/product/list', component: ProductListComponent
  },
  {
    path: 'admin/product/add', component: ProductAddComponent
  },
  {
    path: 'admin/product/update', component: ProductUpdateComponent
  },
  {
    path: 'admin/client', component:ClientComponent
  },
  {
    path: 'admin/client/my-orders', component: MyOrdersComponent
  },
  {
    path: 'admin/client/orders-details', component: MyOrdersDetailsComponent
  },
  {
    path: 'admin/order/orders-management', component: OrdersManagementComponent
  },
  {
    path: 'admin/order/orders-details', component: OrdersDetailsComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
