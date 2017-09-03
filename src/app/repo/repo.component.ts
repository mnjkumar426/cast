import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GitserviceService } from '../service/gitservice.service'
import { Constant } from '../util/Constant'
import {TimeCalculation} from '../util/TimeCalculation'
import { LanguageColor } from '../util/lagauge-color'
import  { DataService} from '../service/share-data.service';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})

export class RepoComponent implements OnInit {
  private s: string;
  private total_count: number=0;
  private items:any[]
  selectedSort="";
  p:number=1;
  constructor(private route: ActivatedRoute, private service: GitserviceService,private data_service:DataService,private  router:Router) {
    this.s = this.route.snapshot.params['search'];
    console.log("id==" + this.s);
    this.selectedSort="";
    this.data_service.setLoading(true);

  }


  ngOnInit() {

   
    this.get_repo(this.s,Constant.PER_PAGE,this.p,this.selectedSort);
  }
  get_repo(s:any,per_page:number,page:number,sort:string){
    this.data_service.setLoading(true);
    this.service.get_repo(s,per_page,page,sort).subscribe((res) => {
      this.data_service.setLoading(false);
            let data = res.json();
      
            this.total_count = data.total_count;
            this.items=data.items;
            console.log(
              res.json()
            );
          },(err)=>{
            this.data_service.setLoading(false);
          })
  }
  get_time_ago(date:string){
    return TimeCalculation.time_ago(date);
  }
  onSearchEnter(s:any){
    this.s=s;
    this.router.navigate(['/repo',s]);
    this.get_repo(this.s,Constant.PER_PAGE,this.p,this.selectedSort);
    console.log(s);
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
  get_color(lag: string) {
    return LanguageColor.get_lang_color(lag);
  }

}
