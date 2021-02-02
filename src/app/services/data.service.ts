import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {   }
  url ='https://society-in-care-default-rtdb.firebaseio.com/users.json';

  add_NewData(record: any[] ){
    return this.httpClient.put(this.url, record);
  }
}
