import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CronsDaterComponent } from './crons-dater/crons-dater.component';
import { ClientsCardComponent } from './clients-card/clients-card.component';
import { TestsComponent } from './tests/tests.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    CronsDaterComponent,
    ClientsCardComponent,
    TestsComponent
  ],
  imports: [
    MatDialogModule,
    CommonModule
  ],
  exports: [SidebarComponent, NavbarComponent, CronsDaterComponent, ClientsCardComponent, TestsComponent]
})
export class SharedModule { }
