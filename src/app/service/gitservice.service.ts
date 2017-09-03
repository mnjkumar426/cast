import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response ,ResponseContentType} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx'
import {Observable}     from 'rxjs/Observable';
const  BASE_URL="https://api.github.com/";
@Injectable()
export class GitserviceService {
 
private headers=null;
private options=null;
  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json','Accept': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
   }
   get_repo(serach:string,per_page:number,page_no:number):Observable<any>
   {
    return this.http.get(BASE_URL+"search/repositories?q="+serach+"&per_page="+per_page+"&page="+page_no,this.options).
    map(res=>res)
     
  }
  get_user_details(username:any):Observable<any>
  {
   return this.http.get(BASE_URL+"users/"+username,this.options).
   map(res=>res)
    
 }



}
