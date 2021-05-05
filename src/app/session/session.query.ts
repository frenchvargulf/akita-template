import { Query } from '@datorama/akita';
import { SessionState, SessionStore } from './session.store';

export class SessionQuery extends Query<SessionState> {
  allState$ = this.select();
  isLoggedIn$ = this.select(state => !!state.token);
  selectName$ = this.select('name');

  // Returns { name, age }
  multiProps$ = this.select(['name', 'token']);

  // Returns [name, age]
  multiPropsCallback$ = this.select(
    [state => state.name, state => state.token]
  );

  constructor(protected store: SessionStore) {
    super(store);
  }

  get isLoggedIn(): boolean {
    return !!this.getValue().token;
  }
}
