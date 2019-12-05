import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocationComponent } from '../location/location.component';

export interface DialogData {
  fixture: string;
  cpu: string;
}

@Component({
  selector: 'app-item-locator',
  templateUrl: './item-locator.component.html',
  styleUrls: ['./item-locator.component.css']
})
export class ItemLocatorComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  fixture: string;
  cpu: string;

  store()
  {
    const dialogRef = this.dialog.open(LocationComponent, {
      width: '1100px',
      height: '1300px',
      data: {cpu: this.cpu, fixture: this.fixture}
    });

  }
  ngOnInit() {
  }

}