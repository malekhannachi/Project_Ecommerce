import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { NavbarComponent } from './components/public/shared/navbar/navbar.component';
import { FooterComponent } from './components/public/shared/footer/footer.component';
import { AdminComponent } from './components/private/admin/admin.component';
import { ClientComponent } from './components/private/client/client.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { CategoriesListComponent } from './components/private/admin/category/categories-list/categories-list.component';
import { CategoryAddComponent } from './components/private/admin/category/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/private/admin/category/category-update/category-update.component';
import { ProductAddComponent } from './components/private/admin/product/product-add/product-add.component';
import { ProductListComponent } from './components/private/admin/product/product-list/product-list.component';
import { ProductUpdateComponent } from './components/private/admin/product/product-update/product-update.component';
import { OrdersManagementComponent } from './components/private/admin/order/orders-management/orders-management.component';
import { OrdersDetailsComponent } from './components/private/admin/order/orders-details/orders-details.component';
import { MyOrdersComponent } from './components/private/admin/client/my-orders/my-orders.component';
import { MyOrdersDetailsComponent } from './components/private/admin/client/my-orders-details/my-orders-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    AdminComponent,
    ClientComponent,
    TopbarComponent,
    SidebarComponent,
    DashboardComponent,
    CategoriesListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
    ProductAddComponent,
    ProductListComponent,
    ProductUpdateComponent,
    OrdersManagementComponent,
    OrdersDetailsComponent,
    MyOrdersComponent,
    MyOrdersDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
