import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray: Array<any> = [];
  todoItem: string = '';


  addTodoList() {
    if(this.todoItem) {
      this.todoArray.push({
        id: this.todoArray.length,
        item: this.todoItem
      });
    this.todoItem = '';
     } 
  }

  removeTodo(itemId: number) {
    this.todoArray =  this.todoArray.filter((item: any) => item.id !== itemId);
  }
}