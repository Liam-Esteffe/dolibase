import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(public router: Router) { }

  navigate(path: string) {
    this.router.navigateByUrl(path);
  }

}
