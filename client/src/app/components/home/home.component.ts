import { Component, OnInit } from '@angular/core';
import { ClientsCardObject } from 'src/app/interfaces/clients-card';
import { CronsDate } from 'src/app/interfaces/crons-date';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  public cronsDate1: CronsDate = {
    month: 'Avril',
    day: 'Sunday',
    day_number: '19',
    horary: '23.39 PM',
    year: '2022'
  }
  public cronsDate2: CronsDate = {
    month: 'May',
    day: 'Thuesday',
    day_number: '9',
    horary: '23.39 PM',
    year: '2022'
  }

  public client: ClientsCardObject = {
    name: 'SurfSystem',
    subname: 'B2B'
  }
  ngOnInit(): void {
  }

}
