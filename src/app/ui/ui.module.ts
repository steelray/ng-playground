import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


const DECLARATIONS = [
  MenuComponent
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    MatMenuModule,
    RouterModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: DECLARATIONS
})
export class UiModule { }
