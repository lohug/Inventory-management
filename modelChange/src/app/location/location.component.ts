import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfigService } from '../config/config.service';
import { DialogData } from '../item-locator/item-locator.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})

export class LocationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LocationComponent>, private configService: ConfigService, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.CPUs = new Array(20);
      this.fixtures = new Array(20);
      for (var i = 0; i < 20; i++)
      {
        this.CPUs[i] = new Array(10);
        this.fixtures[i] = new Array(10);
        for (var j = 0; j < 20; j++)
        {
          this.CPUs[i][j] = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
          this.fixtures[i][j] = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
        }
      }
    }

  fixtures: any;
  CPUs: any;

  CPUplace: any;
  fixturePlace:any;

  fixture: any;
  cpu: any;
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.configService.getAvailableLocations(this.data.fixture, this.data.cpu).subscribe(Models =>{
      this.configService.locationCPU = Models[0]['location'];
      this.configService.locationFix = Models[1]['location'];

      let aux = this.configService.locationCPU.split(' ');//[CPU, 1-A-5]
      if(aux[0] == 'Rack')
      {
        let auxCpu = this.configService.locationCPU;
        this.configService.locationCPU = this.configService.locationFix;
        this.configService.locationFix = auxCpu;
      }
      
      aux = this.configService.locationCPU.split(' ');//[CPU, 1-A-5]
      let aux2 = aux[1].split('-');//[1, A, 5]
      aux2[2]=String(parseInt(aux2[2]));
      this.CPUplace = aux[0] + " " + aux2[0] + "-" + aux2[1] + aux2[2];

      aux = this.configService.locationFix.split(' ');//[RACK, 2-B-5]
      aux2 = aux[1].split('-');//[2, B, 5]
      this.fixturePlace = aux[0] + " " + aux2[2] + "-" + aux2[1];

      for (let locationCPU of this.configService.locationsCPU)
      {
        let aux = locationCPU.split(' ');//[CPU, 1-A-5]
        let aux2 = aux[1].split('-');//[1, A, 5]
        aux2[0]=String(parseInt(aux2[0])-1);
        aux2[2]=String(parseInt(aux2[2])-1);

        switch (aux2[1])
        {
          case 'A':
            if(this.configService.locationCPU == locationCPU){
              this.CPUs[aux2[0]][0][aux2[2]] = 1;
            }
            else
              this.CPUs[aux2[0]][0][aux2[2]] = 0;
            break;
          case 'B':
            if(this.configService.locationCPU == locationCPU)
              this.CPUs[aux2[0]][1][aux2[2]] = 1;
            else
              this.CPUs[aux2[0]][1][aux2[2]] = 0;
            break;
          case 'C':
            if(this.configService.locationCPU == locationCPU)
              this.CPUs[aux2[0]][2][aux2[2]] = 1;
            else
              this.CPUs[aux2[0]][2][aux2[2]] = 0;
            break;
          case 'D':
            if(this.configService.locationCPU == locationCPU)
              this.CPUs[aux2[0]][3][aux2[2]] = 1;
            else
              this.CPUs[aux2[0]][3][aux2[2]] = 0;
            break;
          case 'E':
            if(this.configService.locationCPU == locationCPU)
              this.CPUs[aux2[0]][4][aux2[2]] = 1;
            else
              this.CPUs[aux2[0]][4][aux2[2]] = 0;
            break;
          case 'F':
            if(this.configService.locationCPU == locationCPU)
              this.CPUs[aux2[0]][5][aux2[2]] = 1;
            else
              this.CPUs[aux2[0]][5][aux2[2]] = 0;
            break;
          case 'G':
            if(this.configService.locationCPU == locationCPU)
              this.CPUs[aux2[0]][6][aux2[2]] = 1;
            else
              this.CPUs[aux2[0]][6][aux2[2]] = 0;
            break;
          case 'H':
            if(this.configService.locationCPU == locationCPU)
              this.CPUs[aux2[0]][7][aux2[2]] = 1;
            else
              this.CPUs[aux2[0]][7][aux2[2]] = 0;;
            break;
        }
      }
      for (let locationFix of this.configService.locationsFix)
      {

        let aux = locationFix.split(' ');//[RACK, 2-B-5]
        let aux2 = aux[1].split('-');//[2, B, 5]
        aux2[0]=String(parseInt(aux2[0])-1);
        aux2[2]=String(parseInt(aux2[2])-1);

        switch (aux2[1])
        {
          case 'A':
            if(this.configService.locationFix == locationFix)
              this.fixtures[aux2[0]][0][aux2[2]] = 1;
            else
              this.fixtures[aux2[0]][0][aux2[2]] = 0;
              break;
          case 'B':
            if(this.configService.locationFix == locationFix)
              this.fixtures[aux2[0]][1][aux2[2]] = 1;
            else
              this.fixtures[aux2[0]][1][aux2[2]] = 0;
            break;
          case 'C':
            if(this.configService.locationFix == locationFix)
              this.fixtures[aux2[0]][2][aux2[2]] = 1;
            else
              this.fixtures[aux2[0]][2][aux2[2]] = 0;
            break;
          case 'D':
            if(this.configService.locationFix == locationFix)
              this.fixtures[aux2[0]][3][aux2[2]] = 1;
            else
              this.fixtures[aux2[0]][3][aux2[2]] = 0;
            break;
          case 'E':
            if(this.configService.locationFix == locationFix)
              this.fixtures[aux2[0]][4][aux2[2]] = 1;
            else
              this.fixtures[aux2[0]][4][aux2[2]] = 0;
            break;
          case 'F':
            if(this.configService.locationFix == locationFix)
              this.fixtures[aux2[0]][5][aux2[2]] = 1;
            else
              this.fixtures[aux2[0]][5][aux2[2]] = 0;
            break;
          case 'G':
            if(this.configService.locationFix == locationFix)
              this.fixtures[aux2[0]][6][aux2[2]] = 1;
            else
              this.fixtures[aux2[0]][6][aux2[2]] = 0;
            break;
          case 'H':
            if(this.configService.locationFix == locationFix)
              this.fixtures[aux2[0]][7][aux2[2]] = 1;
            else
              this.fixtures[aux2[0]][7][aux2[2]] = 0;;
            break;
        }
      }
    });
    console.log(this.CPUs);
    console.log(this.fixtures);
  }
}