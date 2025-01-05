import { Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }

  todos=signal<Todo[]>([]);
  errorMessage =signal('');

  setMemberId(memberId:number){
    this.todos.set([]);
    this.getTodos(memberId).
    subscribe(todos => this.todos.set(todos));
  }

  private getTodos(id: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todoUrl}?userId=${id}`).pipe(
       // Cut the length of the long strings
       map(data => data.map(t =>
          t.title.length > 20 ? ({ ...t, title: t.title.substring(0, 20) }) : t
       )),
       catchError(err => {
          this.errorMessage.set(setErrorMessage(err));
          return of([]);
       })
    )
 }
}
function setErrorMessage(err: any): string {
  throw new Error('Function not implemented.');
}

