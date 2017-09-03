import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GitserviceService } from '../service/gitservice.service'
import { Constant } from '../util/Constant'
import {TimeCalculation} from '../util/TimeCalculation'
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})

export class RepoComponent implements OnInit {
  private s: string;
  private total_count: number;
  private items:any[]
  selectedSort="";
  p:number=1;
  constructor(private route: ActivatedRoute, private service: GitserviceService) {
    this.s = this.route.snapshot.params['search'];
    console.log("id==" + this.s);
    this.selectedSort="";

  }


  ngOnInit() {
    this.get_repo(this.s,Constant.PER_PAGE,this.p,this.selectedSort);
  }
  get_repo(s:any,per_page:number,page:number,sort:string){
    this.service.get_repo(s,per_page,page,sort).subscribe((res) => {
      
            let data = res.json();
      
            this.total_count = data.total_count;
            this.items=data.items;
            console.log(
              res.json()
            );
          })
  }
  get_time_ago(date:string){
    return TimeCalculation.time_ago(date);
  }
  pageChanged(e:any){
    this.p=e;
    this.get_repo(this.s,Constant.PER_PAGE,this.p,this.selectedSort);
    console.log(e);
  }
  onFilter(e:any){
    this.selectedSort=e;
    console.log(e);
    this.get_repo(this.s,Constant.PER_PAGE,this.p,this.selectedSort);

  }
  nFormatter(num:number,digit:number){
    return TimeCalculation.nFormatter(num,digit); 
  }

}
