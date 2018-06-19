var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TodoServiceProvider = /** @class */ (function () {
    function TodoServiceProvider() {
        console.log('Hello TodoServiceProvider Provider');
        localStorage['items'] = [];
    }
    TodoServiceProvider.prototype.getItems = function () {
        return this.items;
    };
    TodoServiceProvider.prototype.setItem = function (item) {
        var items = JSON.parse(localStorage['items']);
        items.push(item);
    };
    TodoServiceProvider.prototype.removeItem = function (id) {
        this.items = this.items.filter(function (item) {
            return item['id'] !== id;
        });
    };
    TodoServiceProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], TodoServiceProvider);
    return TodoServiceProvider;
}());
export { TodoServiceProvider };
//# sourceMappingURL=todo-service.js.map