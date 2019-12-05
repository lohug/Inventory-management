import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { interval } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    this.models = new BehaviorSubject(this.models_var);
    this.fixturesUnavailable = new BehaviorSubject(this.fixturesUnav);
    this.cpusUnavailable = new BehaviorSubject(this.cpusUnav);
    
    interval(5000).subscribe(x => {
      this.getConfig();
    });
    interval(5000).subscribe(x => {
      this.getFixtUnav();
    });
    interval(5000).subscribe(x => {
      this.getCpuUnav();
    });
   }
  configUrl = "http://127.0.0.1/andon_system/API/"

  models_var: any;
  models_save: any;
  models: BehaviorSubject<any>;

  fixturesUnavailable: any;
  fixturesUnav: BehaviorSubject<any>;
  fixturesUnav_save: any;

  cpusUnavailable: any;
  cpusUnav: BehaviorSubject<any>;
  cpusUnav_save: any;

  locationCPU: any;
  locationFix: any;

  locationsFix = [
  "RACK 1-A-5", "RACK 1-A-4", "RACK 1-A-3", "RACK 1-A-2", "RACK 1-A-1", "RACK 1-B-5", "RACK 1-B-4", "RACK 1-B-3", "RACK 1-B-2", "RACK 1-B-1",
  "RACK 1-C-5", "RACK 1-C-4", "RACK 1-C-3", "RACK 1-C-2", "RACK 1-C-1", "RACK 2-A-5", "RACK 2-A-4", "RACK 2-A-3", "RACK 2-A-2", "RACK 2-A-1",
  "RACK 2-B-5", "RACK 2-B-4", "RACK 2-B-3", "RACK 2-B-2", "RACK 2-B-1", "RACK 2-C-5", "RACK 2-C-4", "RACK 2-C-3", "RACK 2-C-2", "RACK 2-C-1",
  "RACK 3-A-5", "RACK 3-A-4", "RACK 3-A-3", "RACK 3-A-2", "RACK 3-A-1", "RACK 3-B-5", "RACK 3-B-4", "RACK 3-B-3", "RACK 3-B-2", "RACK 3-B-1",
  "RACK 3-C-5", "RACK 3-C-4", "RACK 3-C-3", "RACK 3-C-2", "RACK 3-C-1", "RACK 4-A-5", "RACK 4-A-4", "RACK 4-A-3", "RACK 4-A-2", "RACK 4-A-1",
  "RACK 4-B-5", "RACK 4-B-4", "RACK 4-B-3", "RACK 4-B-2", "RACK 4-B-1", "RACK 4-C-5", "RACK 4-C-4", "RACK 4-C-3", "RACK 4-C-2", "RACK 4-C-1",
  "RACK 5-A-5", "RACK 5-A-4", "RACK 5-A-3", "RACK 5-A-2", "RACK 5-A-1", "RACK 5-B-5", "RACK 5-B-4", "RACK 5-B-3", "RACK 5-B-2", "RACK 5-B-1",
  "RACK 5-C-5", "RACK 5-C-4", "RACK 5-C-3", "RACK 5-C-2", "RACK 5-C-1", "RACK 6-A-5", "RACK 6-A-4", "RACK 6-A-3", "RACK 6-A-2", "RACK 6-A-1",
  "RACK 6-B-5", "RACK 6-B-4", "RACK 6-B-3", "RACK 6-B-2", "RACK 6-B-1", "RACK 6-C-5", "RACK 6-C-4", "RACK 6-C-3", "RACK 6-C-2", "RACK 6-C-1",
  "RACK 7-A-5", "RACK 7-A-4", "RACK 7-A-3", "RACK 7-A-2", "RACK 7-A-1", "RACK 7-B-5", "RACK 7-B-4", "RACK 7-B-3", "RACK 7-B-2", "RACK 7-B-1",
  "RACK 7-C-5", "RACK 7-C-4", "RACK 7-C-3", "RACK 7-C-2", "RACK 7-C-1", "RACK 8-A-5", "RACK 8-A-4", "RACK 8-A-3", "RACK 8-A-2", "RACK 8-A-1",
  "RACK 8-B-5", "RACK 8-B-4", "RACK 8-B-3", "RACK 8-B-2", "RACK 8-B-1", "RACK 8-C-5", "RACK 8-C-4", "RACK 8-C-3", "RACK 8-C-2", "RACK 8-C-1"
  ]
  locationsCPU = [
    "CPU 1-A-9", "CPU 1-A-8", "CPU 1-A-7", "CPU 1-A-6", "CPU 1-A-5", "CPU 1-A-4", "CPU 1-A-3", "CPU 1-A-2", "CPU 1-A-1",
    "CPU 1-B-9", "CPU 1-B-8", "CPU 1-B-7", "CPU 1-B-6", "CPU 1-B-5", "CPU 1-B-4", "CPU 1-B-3", "CPU 1-B-2", "CPU 1-B-1",
    "CPU 2-A-9", "CPU 2-A-8", "CPU 2-A-7", "CPU 2-A-6", "CPU 2-A-5", "CPU 2-A-4", "CPU 2-A-3", "CPU 2-A-2", "CPU 2-A-1",
    "CPU 2-B-9", "CPU 2-B-8", "CPU 2-B-7", "CPU 2-B-6", "CPU 2-B-5", "CPU 2-B-4", "CPU 2-B-3", "CPU 2-B-2", "CPU 2-B-1",
    "CPU 3-A-9", "CPU 3-A-8", "CPU 3-A-7", "CPU 3-A-6", "CPU 3-A-5", "CPU 3-A-4", "CPU 3-A-3", "CPU 3-A-2", "CPU 3-A-1",
    "CPU 3-B-9", "CPU 3-B-8", "CPU 3-B-7", "CPU 3-B-6", "CPU 3-B-5", "CPU 3-B-4", "CPU 3-B-3", "CPU 3-B-2", "CPU 3-B-1",
    "CPU 4-A-9", "CPU 4-A-8", "CPU 4-A-7", "CPU 4-A-6", "CPU 4-A-5", "CPU 4-A-4", "CPU 4-A-3", "CPU 4-A-2", "CPU 4-A-1",
    "CPU 4-B-9", "CPU 4-B-8", "CPU 4-B-7", "CPU 4-B-6", "CPU 4-B-5", "CPU 4-B-4", "CPU 4-B-3", "CPU 4-B-2", "CPU 4-B-1"
  ]

  getConfig()
  {
    this.http.get(this.configUrl+"modelChange.php").subscribe(Models =>{
      this.models.next( Models );
      this.models_save = Models;
    });
  }

  getAvailableLocations(fixture, cpu)
  {
    return this.http.get(this.configUrl+"store_fixcpu.php?fixture=" + fixture + "&cpu=" + cpu);
  }
  getFixtUnav()
  {
    this.http.get(this.configUrl+"get_fixturesUnavailable.php").subscribe(Fixtures =>{
      //this.fixturesUnav.next( Fixtures );
      this.fixturesUnav_save = Fixtures;
    });
  }

  getCpuUnav()
  {
    this.http.get(this.configUrl+"get_cpusUnavailable.php").subscribe(CPUs =>{
      //this.cpusUnav.next( CPUs );
      this.cpusUnav_save = CPUs;
    });
  }

  resetConfig()
  {
    this.models.next(this.models_save);
  }
}
