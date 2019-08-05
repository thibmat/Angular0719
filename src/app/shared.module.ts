import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule, MatRadioModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatGridListModule

  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatGridListModule
  ]
})
export class SharedModule { }
