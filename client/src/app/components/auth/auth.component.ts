import { Component, OnInit } from '@angular/core';
import { ToolsService } from 'src/app/shared/services/tools.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public tools: ToolsService) { }

  ngOnInit(): void {
  }

}
