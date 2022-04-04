import { Component, Input, OnInit } from '@angular/core';
import { ClientsCardObject } from 'src/app/interfaces/clients-card';

@Component({
  selector: 'app-clients-card',
  templateUrl: './clients-card.component.html',
  styleUrls: ['./clients-card.component.scss']
})
export class ClientsCardComponent implements OnInit {

  constructor() { }

  @Input()
  clients!: ClientsCardObject

  ngOnInit(): void {
  }

}
