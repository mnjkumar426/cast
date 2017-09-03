import { Component, OnInit } from '@angular/core';
import { GitserviceService } from '../service/gitservice.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: GitserviceService) { }

  ngOnInit() {
  }
  
}
