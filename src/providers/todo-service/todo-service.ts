import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoServiceProvider {
	items: Array<object> = JSON.parse(localStorage['items']);

  constructor() {
    console.log('Hello TodoServiceProvider Provider');
    localStorage['items'] = JSON.stringify([]);
  }

  getItems(): Observable<any[]> {
  	return Observable.of(this.items);
  }

  setItem(item): Observable<any[]> {
  	this.items.push(item)
  	localStorage['items'] = JSON.stringify(this.items);

    return Observable.of(this.items);
  }

  removeItem(id): Observable<any[]> {

  	this.items = this.items.filter((item) => {
  		return item['id'] !== id;
  	});

  	localStorage['items'] = JSON.stringify(this.items);

    return Observable.of(this.items);
  }
  searchTask(term: string):Observable<any[]>{
  //   if (!term.trim()) {
       // return Observable.of([]);
  // //   return Observable.of(this.items);
  //   }

    // this.items = this.items.filter((item) => {
    //   return 
    // });

    return Observable.of([]);
  }
}
