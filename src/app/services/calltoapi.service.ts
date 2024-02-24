import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CalltoapiService {

  constructor() { }
  async getCalltoApi() {
    return axios.get(environment.api_url);
  }
}
//  //pronogstico
