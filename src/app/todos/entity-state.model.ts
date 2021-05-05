import { HashMap } from '@datorama/akita';

export interface EntityState<Entity = any, IDType = any> {
  entities: HashMap<Entity>;
  ids: IDType[];
  loading: boolean;
  error: any;
}
