import { UserService } from './user.service';
import { Todo } from './../models/todo';
import { computed, Injectable, signal } from '@angular/core';
import { catchError, delay, map, Observable, of, Subject, switchMap, tap } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ToDoState } from '../models/todostate';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoUrl = 'https://jsonplaceholder.typicode.com/todos';

    //selectors
    isLoading =  computed(() =>this.state().isLoading);
    currentMember =  computed(() =>this.state().currentMember);
    toDos =  computed(() =>this.state().memberToDos);
    errorMessages = computed(()=> this.state().error);
    inCompleteOnly =computed(()=> this.state().inCompleteOnly);
    filteredToDos = computed(()=>{
     if(this.inCompleteOnly()){
      return this.toDos().filter(t=>t.completed === false);
     }else{
      return this.toDos();
     }
    });
    private selectedIdSubject = new Subject<number>();
    private selectedId$ = this.selectedIdSubject.asObservable();


  constructor(private http: HttpClient,private userService : UserService) {
  this.selectedId$.pipe(
  tap(()=> this.setLoadingIndicator(true)),
  tap(id=> this.setCurrentMember(id)),
  switchMap(id => this.getTodos(id)),
  delay(1000),
  takeUntilDestroyed()
  ).subscribe(todos=> this.setmemberToDos(todos));
  }

  setmemberToDos(todoos: Todo[]): void {
   this.state.update(state=>({
    ...state,
    memberToDos : todoos,
    isLoading : false
   }))
  }

  setCurrentMember(id: number): void {
    const member = this.userService.getCurrentMember(id);
    this.state.update(state =>({
      ...state,
       currentMember : member,
       memberToDos: []
    }));
  }


  setLoadingIndicator(isLoading: boolean): void {
    this.state.update(state =>({
      ...state,
     isLoading : isLoading
    }));
  }

  todos=signal<Todo[]>([]);
  errorMessage = signal('');

  private  state =  signal<ToDoState>({
    isLoading : false,
    currentMember : undefined,
    memberToDos :[],
    error: null,
    inCompleteOnly : false
  });



  getTodosForMember(memberId : number){
  this.selectedIdSubject.next(memberId);
  }

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
       catchError(err =>

        this.setError(err)
       )
    )
 }

 setError(err: HttpErrorResponse): Observable<Todo[]> {
   this.state.update(state =>({
    ...state,
    error : setErrorMessage(err)
   }));
   this.errorMessage.set(setErrorMessage(err));
   return of([]);
  }

  filterTodos(filter:boolean){
    this.state.update(state=>({
     ...state,
     inCompleteOnly : filter
    }));
  }


}

export function setErrorMessage(err : HttpErrorResponse):string {
let errorMessage : string;
if(err.error instanceof ErrorEvent){
 errorMessage = `An error Occurred : ${err.error.message}`
}else{
 errorMessage = `Backend returned code : ${err.status}:${err.message}`
}
return errorMessage;
}



