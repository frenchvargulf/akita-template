import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Todo } from './todo.model';

export interface TodosState extends EntityState<Todo, number> { }

@StoreConfig({ name: 'todos', idKey: '_id' })
export class TodosStore extends EntityStore<TodosState> {
  filter: string;

  constructor() {
    super({ filter: 'ALL' });
  }

  akitaPreAddEntity(newEntity: Todo): Todo & { _id: string; } {
    return {
      ...newEntity,
      _id: newEntity.nested.id,
    };
  }
}
