import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PoemService {
  data: any;
  
  constructor(public http: Http) {
    console.log('Hello PeopleService Provider.');
  }

  load() {
  if (this.data) {
    return Promise.resolve(this.data);
  }

  return new Promise(resolve => {
    this.http.get('http://www.sparkzeal.com/geetakavita/poem')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data.poems;
        // console.log(this.data);

        resolve(this.data);
      });
  });
};

}
