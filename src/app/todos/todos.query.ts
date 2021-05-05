import { Injectable } from '@angular/core';
import { EntityState, Query } from '@datorama/akita';
import { TodosStore, TodosState } from './todos.store';

export interface ItemState extends EntityState<any> {}
@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends Query<TodosState> {
  allState$ = this.select();
  todos$ = this.select(state => state.todos);

  constructor(protected store: TodosStore) {
    super(store);
  }

  get todos(): boolean {
    console.log(this.getValue());
    return !!this.getValue().todos;
  }
}
