import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/account/login/login.component';
import { RegisterComponent } from './pages/account/register/register.component';
import { AuthGuard } from './services/auth.guard';
import { AdminComponent } from './pages/dashboard/admin/admin.component';
import { ProductsComponent } from './pages/home/products/products.component';
import { ContactComponent } from './pages/home/contact/contact.component';
import { AboutComponent } from './pages/home/about/about.component';
import { ProfileComponent } from './pages/home/profile/profile.component';
import { CategoriesComponent } from './pages/home/categories/categories.component';
import { AllProductsComponent } from './pages/home/allproducts/allproducts.component';
import { UsersComponent } from './pages/home/users/users.component';
import { OrdersComponent } from './pages/home/orders/orders.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard]},
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard]},
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { role: 'Admin' }},
  { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard]},
  { path: 'allproducts', component: AllProductsComponent, canActivate: [AuthGuard]},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
