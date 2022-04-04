import { Component, OnInit } from '@angular/core';
import { ToolsService } from '../services/tools.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public tools: ToolsService) { }

  ngOnInit(): void {
  }

}
