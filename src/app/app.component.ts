import { Component } from '@angular/core';

import * as dctable from 'dc.datatables/dc.datatables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reproduction';

  constructor() {
    console.log(dctable);
  }

}
