import { Todo } from './todo';
import { User } from './user';

export interface ToDoState {
  isLoading :boolean;
  currentMember : User |undefined;
  memberToDos : Todo[];
  error :string | null;
  inCompleteOnly : boolean
}
