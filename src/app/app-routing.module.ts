import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListeComponent} from './product-liste/product-liste.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produits', component: ProductListeComponent},
  {path: 'produits/creation', component: ProductCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
