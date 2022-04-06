import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ClientsModalComponent } from 'src/app/modals/clients-modal/clients-modal.component';
import { ClientsCardComponent } from 'src/app/shared/clients-card/clients-card.component';
import { TestsComponent } from 'src/app/shared/tests/tests.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(ClientsModalComponent, {
        height: '60%',
        width: '60%',
        panelClass: 'app-full-bleed-dialog',
    });
}

}
