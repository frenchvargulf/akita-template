import { Component, OnInit } from '@angular/core';
import { TodosQuery } from './todos/todos.query';
import { TodosStore } from './todos/todos.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos$ = this.todosQuery.select();
  todos = [];

  constructor(private todosQuery: TodosQuery, private store: TodosStore) {
    store.set({ 1: {
      description: 'Some Lovely Task',
      nested: { id: '1' }
    }});
  }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.todos$.subscribe(
      res => {
        this.todos = [res.entities['1']];
      },
      err => console.log(err)
    );
  }

  updateTodo(): void {
    this.store.update({ filter: 'COMPLETED' });
  }
}
