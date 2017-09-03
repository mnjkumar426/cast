import { Component } from '@angular/core';
import { DataService} from './service/share-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoading=false;
  constructor(private dataService:DataService){
    this.dataService.isLoding().subscribe(res=>{
      this.isLoading=res;
    })
  }
}
