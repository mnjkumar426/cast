import { Component, OnInit } from '@angular/core';
import { GitserviceService } from '../service/gitservice.service'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LanguageColor } from '../util/lagauge-color'
import  { DataService} from '../service/share-data.service';
import {TimeCalculation} from '../util/TimeCalculation'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user_name: any;
  user: any = {};
  repos: any[];
  overviews:any[];
  private page=1;
  fls:any[];
  fp=1;
  constructor(private service: GitserviceService, private route: ActivatedRoute,private  data_shervice:DataService) {
    this.user_name = this.route.snapshot.params['username'];
  }
  

  ngOnInit() {
    //this.data_shervice.setLoading(true);
    this.get_user_details();
    this.get_user_repos_overview(0);

  }

  get_user_details() {
    //this.data_shervice.setLoading(true);
    this.service.get_user_details(this.user_name).subscribe((res) => {
      this.data_shervice.setLoading(false);
      this.user = res.json();
    },(err)=>{
      this.data_shervice.setLoading(false);
    }
    );
  }
  
  get_user_repos_overview(page) {
    this.service.get_user_repos(this.user_name,0).subscribe((res) => {
      this.overviews = res.json();
    }
    );
  }
  overview(){
    this.get_user_repos_overview(0);
  }

  repos_click(page){
    this.service.get_user_repos(this.user_name,page).subscribe((res) => {
      this.repos = res.json();
    });
  }
  pageChanged(e:number){
    this.repos_click(e);
  }
  follower(fp){
    this.service.get_user_followers(this.user_name,fp).subscribe((res) => {
      this.fls = res.json();
    });
  }
  get_color(lag: string) {
    return LanguageColor.get_lang_color(lag);
  }
  nFormatter(num:number,digit:number){
    return TimeCalculation.nFormatter(num,digit); 
  }

}
