import { Component, OnInit } from '@angular/core';
import { GitserviceService } from '../service/gitservice.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user_name: any;
  user:any={};
  constructor(private service: GitserviceService, private route: ActivatedRoute) {
    this.user_name = this.route.snapshot.params['username'];
  }

  ngOnInit() {
    this.get_user_details();
  }
  get_user_details() {
    this.service.get_user_details(this.user_name).subscribe((res) => {
      this.user = res.json();
    }
    );
  }

}
