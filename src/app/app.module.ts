// imports Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

// Les composants
import { AppComponent } from './app.component';
import { ProductListeComponent } from './product-liste/product-liste.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductViewShowComponent } from './product-view-show/product-view-show.component';

// Les modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule} from './shared.module';

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
    SharedModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
