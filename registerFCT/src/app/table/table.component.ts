import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private configService: ConfigService) {
  }
  
  locsFix: any;
  locsCPU: any;
  reqFix: any;
  reqCPU: any;
  getFix: any;
  getCPU: any;

  fixtures: string[];
  cpus: string[];

  trackByFn(index: any, item: any) {
    return index;
  }

  changed(location, i, j, k)
  {
    this.locsFix[i][j][k] = location;
    console.log(i + ' ' + j + ' ' + k);
  }
  update() {
    let locRequest = {
      disp:"ERROR",
      location:"ERROR",
      type: "ERROR"
    };

    let request = {
      name: "ERROR",
      disp: "ERROR",
      location: "ERROR"
    }
    this.locsFix.forEach((locationFix, i) => {
      locRequest['type'] = "RACK";
      locationFix.forEach((loc, j) => {
        loc.forEach((elem, k) => {
          if(elem != "")
          {
            locRequest['location'] = "RACK " + String(i + 1) + "-" + String.fromCharCode(j + 65) + "-" + String(k + 1);
            locRequest['disp'] = "0";
          }else
          {
            locRequest['location'] = "RACK " + String(i + 1) + "-" + String.fromCharCode(j + 65) + "-" + String(k + 1);
            locRequest['disp'] = "1";
          }
          this.configService.locations_update(locRequest).subscribe(result => {
            console.log(result);
          });
        });
      });
    });
    this.locsCPU.forEach((locationCPU, i) => {
      locRequest['type'] = "CPU";
      locationCPU.forEach((loc, j) => {
        loc.forEach((elem, k) => {
          if(elem != "")
          {
            locRequest['location'] = "CPU " + String(i + 1) + "-" + String.fromCharCode(j + 65) + "-" + String(k + 1);
            locRequest['disp'] = "0";
          }else
          {
            locRequest['location']  = "CPU " + String(i + 1) + "-" + String.fromCharCode(j + 65) + "-" + String(k + 1);
            locRequest['disp'] = "1";
          }
          this.configService.locations_update(locRequest).subscribe(result => {
            console.log(result);
          });
        });
      });
    });
    let isFree = false;
    this.cpus.forEach((cpu) => {
      isFree = false;
      request['location'] = "ERROR";
      request['name'] = cpu;
      this.locsCPU.forEach((locationCPU, i) => {
        locationCPU.forEach((loc, j) => {
          loc.forEach((elem, k) => {
            if(elem == cpu)
            {
              request['location'] = "CPU " + String(i + 1) + "-" + String.fromCharCode(j + 65) + "-" + String(k + 1);
              isFree = true;
            }
          });
          if(isFree){
            request['disp'] = '1';
          }else{
            request['disp'] = '0';
          }
        });
      });
      this.configService.cpus_update(request).subscribe(result => {
        console.log(result);
      });
    });

    this.fixtures.forEach((fixture) => {
      isFree = false;
      request['location'] = "ERROR";
      request['name'] = fixture;
      this.locsFix.forEach((locationFix, i) => {
        locationFix.forEach((loc, j) => {
          loc.forEach((elem, k) => {
            if(elem == fixture)
            {
              request['location'] = "RACK " + String(i + 1) + "-" + String.fromCharCode(j + 65) + "-" + String(k + 1);
              isFree = true;
            }
          });
          if(isFree){
            request['disp'] = '1';
          }else{
            request['disp'] = '0';
          }
        });
      });
      this.configService.fixtures_update(request).subscribe();
    });
  }

  ngOnInit() {
       
    this.locsFix = [
      [["", "", "", "", ""],
        ["", "", "", "", ""], 
        ["", "", "", "", ""]],
    
      [["", "", "", "", ""], 
        ["", "", "", "", ""],
        ["", "", "", "", ""]],
    
      [["", "", "", "", ""],
        ["", "", "", "", ""], 
        ["", "", "", "", ""]],
    
      [["", "", "", "", ""],
        ["", "", "", "", ""], 
        ["", "", "", "", ""]],

      [["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]],
    
      [["", "", "", "", ""],
        ["", "", "", "", ""], 
        ["", "", "", "", ""]],

      [["", "", "", "", ""],
        ["", "", "", "", ""], 
        ["", "", "", "", ""]],
    
      [["", "", "", "", ""],
        ["", "", "", "", ""], 
        ["", "", "", "", ""]]
      ]
    this.locsCPU = [
      [["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""]],
  
      [["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""]],  
    
      [["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""]],
        
      [["", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", ""]]
      ]

    this.fixtures = []
    this.cpus = []

    this.configService.getFixLocations().subscribe(locations => {
      for(let loc in locations)
      {
        let aux1 = locations[parseInt(loc,10)]['location'].split(' ');
        let aux2 = aux1[1].split('-');
        aux2[0] -= 1;
        aux2[2] -= 1;

        this.locsFix[aux2[0]][aux2[1].charCodeAt(0) - 65][aux2[2]] = locations[parseInt(loc,10)]['name_fixture'];
      }
      this.getFix = locations;
    });
    this.configService.getCPULocations().subscribe(locations => {
      for(let loc in locations)
      {
        let aux1 = locations[parseInt(loc,10)]['location'].split(' ');
        let aux2 = aux1[1].split('-');
        aux2[0] -= 1;
        aux2[2] -= 1;
        this.locsCPU[aux2[0]][aux2[1].charCodeAt(0) - 65][aux2[2]] = locations[parseInt(loc,10)]['name_cpu'];
      }
      this.getCPU = locations;
    });
    this.configService.getCPUs().subscribe(cpus => {
      for(let id in cpus)
      {
        this.cpus.push(cpus[parseInt(id, 10)]['name_cpu']);
      }
      console.log(this.cpus);
    });
    this.configService.getFixtures().subscribe(fixtures => {
      for(let id in fixtures)
      {
        this.fixtures.push(fixtures[parseInt(id, 10)]['name_fixture']);
      }
      console.log(this.fixtures);
    });
  }
}