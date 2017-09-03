import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { SearchComponent } from './search/search.component';
import { RepoComponent } from './repo/repo.component';
import{GitserviceService}  from './service/gitservice.service'
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserComponent } from './user/user.component';
import  { DataService} from './service/share-data.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LeftNavigationComponent,
    SearchComponent,
    RepoComponent,
    UserComponent
  ],
  imports: [
    
    BrowserModule,
    HttpModule,
    FormsModule,
    
   ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    NgxPaginationModule
    ,
    routing
  ],
  providers: [GitserviceService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
