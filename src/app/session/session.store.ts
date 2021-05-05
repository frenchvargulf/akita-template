import { Store, StoreConfig } from '@datorama/akita';

export interface SessionState {
  token: string;
  name: string;
}

export function createInitialState(): SessionState {
  return {
    token: '',
    name: ''
  };
}

// resettable: true; deepFreezeFn: customDeepFreeze; cache; idKey
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }
}
