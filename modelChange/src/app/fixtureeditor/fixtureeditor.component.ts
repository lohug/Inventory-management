import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditorComponent } from '../editor/editor.component';

export interface DialogData {
  fixture: string;
  cpu: string;
}


@Component({
  selector: 'app-fixtureeditor',
  templateUrl: './fixtureeditor.component.html',
  styleUrls: ['./fixtureeditor.component.css']
})
export class FixtureeditorComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  fixture: string;
  cpu: string;

  store()
  {
    const dialogRef = this.dialog.open(EditorComponent, {
      width: '1080px',
      height: '720px',
      data: {cpu: this.cpu, fixture: this.fixture}
    });
  }

  ngOnInit() {
  }
}