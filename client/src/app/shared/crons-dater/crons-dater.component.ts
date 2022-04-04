import { Component, Input, OnInit } from '@angular/core';
import { CronsDate } from 'src/app/interfaces/crons-date';

@Component({
  selector: 'app-crons-dater',
  templateUrl: './crons-dater.component.html',
  styleUrls: ['./crons-dater.component.scss']
})
export class CronsDaterComponent implements OnInit {

  @Input()
  cronsDate!: CronsDate
  constructor() { }

  ngOnInit(): void {
  }

}
