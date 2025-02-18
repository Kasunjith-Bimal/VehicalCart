import { Todo } from '../models/todo';
import { TodoService } from './../service/todo.service';
import { UserService } from './../service/user.service';
import { Component, computed, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-sample',
  imports: [],
  templateUrl: './to-do-sample.component.html',
  styleUrl: './to-do-sample.component.css'
})
export class ToDoSampleComponent implements OnInit {

  ngOnInit(): void {
    this.userService.loadMembers();
   }

  constructor(private userService : UserService,public todoService:TodoService) {

  }

  users = computed(() => {
    return this.userService.members()
  });

  isLoading =computed(() =>{
    return this.todoService.isLoading();
  });

  currentMember = computed(() =>{
    return this.todoService.currentMember();
  });

  todosForMember = computed(() =>{
    return this.todoService.filteredToDos() ??[];
  });

  errorMessage = computed(() =>{
    return this.todoService.errorMessages();
  });

  // Actions
onFilter(ele:EventTarget | null) {
 this.todoService.filterTodos((ele as HTMLInputElement).checked);
}

onSelected(ele:EventTarget | null) {
this.todoService.getTodosForMember(Number((ele as HTMLSelectElement).value))
}

onChangeStatus(task: Todo, ele: EventTarget | null) {

}

}
