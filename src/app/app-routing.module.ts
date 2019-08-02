import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListeComponent} from './product-liste/product-liste.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ProductShowComponent} from './product-show/product-show.component';
import {ProductViewShowComponent} from './product-view-show/product-view-show.component';
import {ProductUpdateComponent} from "./product-update/product-update.component";


const routes: Routes = [
  {path: '', component: HomeComponent, data: {preload: true}},
  {path: 'produits', component: ProductListeComponent, data: {preload: true}},
  {path: 'produits/creation', component: ProductCreateComponent, data: {preload: true}},
  {path: 'produits/:slug', component: ProductViewShowComponent, data: {preload: true}},
  {path: 'produits/modification/:id', component: ProductUpdateComponent, data: {preload: true}},
  {path: 'not-found', component: NotFoundComponent, data: {preload: true}},
  {path: '**', component: NotFoundComponent, data: {preload: true}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
