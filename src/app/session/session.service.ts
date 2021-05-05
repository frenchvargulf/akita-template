import { SessionStore } from './session.store';
import { HttpClient } from '@angular/common/http';

export class SessionService {
  constructor(private sessionStore: SessionStore, private http: HttpClient) {}

  // updateUserName(newName: string): void {
  //   // this.sessionStore.update({ name: newName });

  //   // callback
  //   // which gets the current state
  //   // returns a new immutable state, which will be the new value of the store
  //   this.sessionStore.update(state => ({
  //     name: newName
  //   }));
  // }

  async updateUserName(newName: string): Promise<void> {
    this.sessionStore.setLoading(true);
    try {
      // await this.http(...).toPromise();
    } catch (error) {
      this.sessionStore.setError(error);
    }

    this.sessionStore.update({ name: newName });
    this.sessionStore.setLoading(false);
  }


  // sessionStore.destroy();
}
