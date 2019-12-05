import { Component, OnInit } from '@angular/core';
import { AuthorisedSideNavService } from '../services/authorised-side-nav.service';
import { ConfigService } from '../config/config.service';


@Component({
  selector: 'app-authorised-side-nav',
  templateUrl: './authorised-side-nav.component.html',
  styleUrls: ['./authorised-side-nav.component.css']
})
export class AuthorisedSideNavComponent implements OnInit {

  constructor(public sideNavService: AuthorisedSideNavService, private configService: ConfigService) { }

  models: any;
  model = {
    model: "",
    leader: "",
    line: "",
    status: "",
    fixture: "",
    cpu: ""
  }

  filterApply()
  {
    if(this.model.fixture != null)
    {
      this.configService.resetConfig();
      this.models = this.models.filter(Models => (Models.model.includes(this.model.model) && Models.id_leader.includes(this.model.leader) 
                                                  && Models.line.includes(this.model.line) && Models.status.includes(this.model.status)
                                                  && Models.id_fixture.includes(this.model.fixture) && Models.id_cpu.includes(this.model.cpu)));
      this.configService.models.next(this.models);
    }
    else
      this.configService.resetConfig();
  }
  ngOnInit() {
    this.configService.models.subscribe(Models => {
      this.models = Models;
    });
  }

}
