import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as internal from 'stream';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  url = 'api/projects'
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.url+'id='+10);;
  }
  getList(page:number,pageSize:number,search:string,filter:string){

    return this.http.get(this.url+'pages/?page='+page+'&pageSize='+pageSize+'&search='+search+'&filter='+filter);;
  }
  updataData(){
    return this.http.put(this.url,{'id':10,'name':'dummy'});
  }
  deleteData(){
    return this.http.delete('api/dummy?id='+10);
  }
  addData(){
    return this.http.post(this.url,{'id':10,"name":"dummy"});
  }
}
