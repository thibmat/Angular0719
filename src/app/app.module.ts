// imports Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Les composants
import { AppComponent } from './app.component';
import { ProductListeComponent } from './product-liste/product-liste.component';
import { ProductCreateComponent } from './product-create/product-create.component';

// Les modules
import { AppRoutingModule } from './app-routing.module';

// Les imports d'Angular Material
import { LayoutModule } from '@angular/cdk/layout';
import {FormsModule} from '@angular/forms';
import { ProductShowComponent } from './product-show/product-show.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {SharedModule} from './shared.module';
import { ProductViewShowComponent } from './product-view-show/product-view-show.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListeComponent,
    ProductCreateComponent,
    ProductShowComponent,
    HomeComponent,
    NotFoundComponent,
    ProductViewShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
