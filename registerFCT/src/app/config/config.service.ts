import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) {
    
   }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
    })
  };
  configUrl = "http://192.168.3.35/andon_system/API/"

  getFixLocations()
  {
    return this.http.get(this.configUrl + "getFCTroom.php");
  }
  getCPULocations()
  {
    return this.http.get(this.configUrl + "getFCTroomCPU.php");
  }
  getCPUs()
  {
    return this.http.get(this.configUrl + "get_cpus.php");
  }
  getFixtures()
  {
    return this.http.get(this.configUrl + "get_fixtures.php");
  }
  getLocationId()
  {
    return this.http.get(this.configUrl + "get_locations.php");
  }
  locations_update(data)
  {
    console.log(data);
    return this.http.post(this.configUrl + "update_loc.php", data);
  }
  cpus_update(data)
  {
    return this.http.post(this.configUrl + "update_cpus.php", data, this.httpOptions);
  }
  fixtures_update(data)
  {
    return this.http.post(this.configUrl + "update_fixtures.php", data);
  }
}
