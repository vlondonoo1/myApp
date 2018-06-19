import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsTaskPage } from '../details-task/details-task';
import { TodoServiceProvider } from '../../providers/todo-service/todo-service'; 
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: Array<object> = [];
  task: string = "";
  private searchTerms = new Subject<string>();
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public todoServiceProvider: TodoServiceProvider
    ) {
      this.todoServiceProvider.getItems().subscribe( data => {
        this.items = data;
      });
    }

  addTask(){
    let newTask = {
      id: this.items.length + 1,
      title: this.task,
      note: `Task #${this.items.length + 1}`
    }

    this.todoServiceProvider.setItem(newTask).subscribe( data => {
      this.items = data;
    });
  }

  removeTask(num):void{    
     this.todoServiceProvider.removeItem(num).subscribe( data => {
     this.items = data;
    });

  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DetailsTaskPage, {
      item: item
    });
  }
  searchTask(text){
     let val =text.target.value;
    // this.searchTerms.next(text);
    this.todoServiceProvider.searchTask(val).subscribe( data => {
     
    });
  }
}
