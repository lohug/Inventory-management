import { Component, OnInit , Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfigService } from '../config/config.service';
import { DialogData } from '../item-locator/item-locator.component';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  
  fixtureControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  fixtures = [
    'FC0001',
    'FC0002',
    'FC0003',
    'FC0004'
  ];

  constructor(public dialogRef: MatDialogRef<EditorComponent>, private configService: ConfigService, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

}
