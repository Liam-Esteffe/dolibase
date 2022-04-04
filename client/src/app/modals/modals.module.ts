import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsModalComponent } from './clients-modal/clients-modal.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';

import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [
    ClientsModalComponent
  ],
  imports: [
    MatSliderModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    CommonModule
  ],
  exports: [ClientsModalComponent]
})
export class ModalsModule { }
