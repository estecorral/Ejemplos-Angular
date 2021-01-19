import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from "@angular/material/chips";
import { MatCardModule } from "@angular/material/card"

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
  ],
})
export class MaterialModule {}
