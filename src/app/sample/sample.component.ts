import { CommonModule, NgFor } from '@angular/common';
import { Component, computed, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-sample',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent implements OnInit {

onSelectedTask(arg0: EventTarget|null) {
throw new Error('Method not implemented.');
}

constructor(private userService :UserService,private todoService :TodoService) {

}
ngOnInit(): void {
 this.userService.loadMembers();
}

members = computed(() => {
  return this.userService.members()
});

toDoMember = computed(() =>{
  return this.todoService.todos();
})

onSelectedMember(ele: EventTarget|null) {
  const id = Number((ele as HTMLSelectElement).value);
  this.todoService.setMemberId(id);
}

}
