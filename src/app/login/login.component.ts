import { Component } from '@angular/core';
import { SessionQuery } from '../session/session.query';

@Component({})
export class LoginComponent {
  isLoading$ = this.sessionQuery.selectLoading();
  error$ = this.sessionQuery.selectError();

  constructor(private sessionQuery: SessionQuery) {}
}
