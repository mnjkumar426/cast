import { Component, OnInit } from '@angular/core';
import { GitserviceService } from '../service/gitservice.service'

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.css']
})
export class LeftNavigationComponent implements OnInit {

  constructor(private service: GitserviceService) { 
    
  }

  ngOnInit() {
    //this.get_lang_count_1("JAva");
  }

  get_lang_count_1(lang:string){
   let co=0;
    this.service.get_lang_count(lang).subscribe((res)=>{
      co=res.json().total_count;
    });

  }

}
