import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { AuthorisedSideNavService } from '../services/authorised-side-nav.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(public sideNavService: AuthorisedSideNavService, private configService: ConfigService) { }
  models: any;
  time_est: any;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  asc = [true, true, true, true, true, true, true, true, true, true, true];
  icon = ["", "", "", "", "", "", "", "", "", "", ""]
  columns = ["model", "id_leader", "line", "time_required", "time_stamp", "time_attend", 
            "time_install", "down_time",  "status", "id_fixture", "id_cpu"];
  elements;
  pages;
  pageNumber = 1;
  firstRun = true;
  column = 0;
  B_red = false;
  B_yellow = false;
  B_green = false;
  B_orange = false;

  sortBy(col)
  {
    this.column = col;

    this.configService.resetConfig();

    switch (col)
    {
      case 0:
        this.sortStringSelect(0);
        break;
      case 1:
        this.sortStringSelect(1);
        break;
      case 2:
        this.sortStringSelect(2);
        break;
      case 3:
        this.sortStringSelect(3);
        break;
      case 4:
        this.sortStringSelect(4);
        break;
      case 5:
        this.sortStringSelect(5);
        break;
      case 6:
        this.sortStringSelect(6);
        break;
      case 7:
        this.sortStringSelect(7);
        break;
      case 8:
        this.sortStringSelect(8);
        break;
      case 9:
        this.sortSelect(9);
        break;
      case 10:
        this.sortSelect(10);
        break;
    }
  }
  sortSelect(col)
  {
    if(this.asc[col])
    {
      this.models.sort((a, b) => {
        if (Number(a[this.columns[col]]) < Number(b[this.columns[col]]))
          return -1;
        if (Number(a[this.columns[col]]) > Number(b[this.columns[col]]))
          return 1;
        return 0;
      });
    }
    else
    {
      this.models.sort((a, b) => {
        if (Number(a[this.columns[col]]) > Number(b[this.columns[col]]))
          return -1;
        if (Number(a[this.columns[col]]) < Number(b[this.columns[col]]))
          return 1;
        return 0;
      });
    }
    this.asc[col] = !this.asc[col];
    for (var _i = 0; _i < this.icon.length; _i++) 
    {
      if(_i == col)
        if(this.asc[col])
          this.icon[_i] = "expand_more";
        else
          this.icon[_i] ="expand_less";
      else
      this.icon[_i] = "";
    }
    this.configService.models.next(this.models);
  }
  sortStringSelect(col)
  {
    if(this.asc[col])
    {
      this.models.sort((a, b) => {
        if (a[this.columns[col]] < b[this.columns[col]])
          return -1;
        if (a[this.columns[col]] > b[this.columns[col]])
          return 1;
        return 0;
      });
    }
    else
    {
      this.models.sort((a, b) => {
        if (a[this.columns[col]] > b[this.columns[col]])
          return -1;
        if (a[this.columns[col]] < b[this.columns[col]])
          return 1;
        return 0;
      });
    }
    this.asc[col] = !this.asc[col];
    for (var _i = 0; _i < this.icon.length; _i++) 
    {
      if(_i == col)
        if(this.asc[col])
          this.icon[_i] = "expand_more";
        else
          this.icon[_i] ="expand_less";
      else
        this.icon[_i] = "";
    }
    this.configService.models.next(this.models);
  }

  paginatorChange()
  {
    this.configService.resetConfig();
    this.paginator();
  }
  paginator()
  {
    this.elements = 19;
    this.pages = Math.ceil(this.models.length/this.elements);
    this.models = this.models.slice(this.pageNumber - 1,  (this.pageNumber * this.elements) - 1);
  }
  ngOnInit() {
    this.configService.models.subscribe(Models => {
      this.models = Models;
    });

  }
}