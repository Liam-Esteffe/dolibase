import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import {MatDividerModule} from '@angular/material/divider';
import { CronsStateComponent } from './crons-state/crons-state.component';
import { MessagesComponent } from './messages/messages.component';
import { DatabaseComponent } from './database/database.component';
import { ClientsComponent } from './clients/clients.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalsModule } from '../modals/modals.module';


@NgModule({
  declarations: [
    AuthComponent,
    HomeComponent,
    CronsStateComponent,
    MessagesComponent,
    DatabaseComponent,
    ClientsComponent
  ],
  imports: [
    ModalsModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    SharedModule,
    CommonModule
  ]
})
export class ComponentsModule { }
