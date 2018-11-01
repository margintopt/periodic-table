import { Component } from '@angular/core';
import { MtaPeriodicTableService } from 'components/periodic-table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'periodic-table';
  isShowElDetail = false;
  maxSelect = -1;

  constructor(public service: MtaPeriodicTableService) {
  }
}
