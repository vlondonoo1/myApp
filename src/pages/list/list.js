var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsTaskPage } from '../details-task/details-task';
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';
var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, todoServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todoServiceProvider = todoServiceProvider;
        this.items = [];
        this.task = "";
        this.items = this.todoServiceProvider.getItems();
    }
    ListPage.prototype.addTask = function () {
        var newTask = {
            id: this.items.length + 1,
            title: this.task,
            note: "This is item #" + (this.items.length + 1)
        };
        this.todoServiceProvider.setItem(newTask);
    };
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(DetailsTaskPage, {
            item: item
        });
    };
    ListPage = __decorate([
        Component({
            selector: 'page-list',
            templateUrl: 'list.html'
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            TodoServiceProvider])
    ], ListPage);
    return ListPage;
}());
export { ListPage };
//# sourceMappingURL=list.js.map