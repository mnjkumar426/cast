import { Component, OnInit } from '@angular/core';
import { GitserviceService } from '../service/gitservice.service'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LanguageColor } from '../util/lagauge-color'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user_name: any;
  user: any = {};
  repos: any[];
  constructor(private service: GitserviceService, private route: ActivatedRoute) {
    this.user_name = this.route.snapshot.params['username'];
  }

  ngOnInit() {
    this.get_user_details();
    this.get_user_repos();
  }
  get_user_details() {
    this.service.get_user_details(this.user_name).subscribe((res) => {
      this.user = res.json();
    }
    );
  }
  get_user_repos() {
    this.service.get_user_repos(this.user_name).subscribe((res) => {
      this.repos = res.json();
    }
    );
  }
  get_color(lag: string) {
    return LanguageColor.get_lang_color(lag);
  }

}
