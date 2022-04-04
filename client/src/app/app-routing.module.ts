import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CronsStateComponent } from './components/crons-state/crons-state.component';
import { DatabaseComponent } from './components/database/database.component';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';

const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'home', component: HomeComponent},
  {path: 'crons-state', component: CronsStateComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'database', component: DatabaseComponent},
  {path: 'clients', component: ClientsComponent},
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
