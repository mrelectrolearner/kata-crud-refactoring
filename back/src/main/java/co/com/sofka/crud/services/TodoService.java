package co.com.sofka.crud.services;

import co.com.sofka.crud.repositories.Task;
import co.com.sofka.crud.repositories.Todo;
import co.com.sofka.crud.repository.TaskRepository;
import co.com.sofka.crud.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {

    @Autowired
    private TodoRepository repository;
    @Autowired
    private TaskRepository taskRepository;

    public Iterable<Todo> list(){
        return repository.findAll();
    }

    public Todo save(Todo todo){
        return repository.save(todo);
    }

    public void delete(Long id){
        repository.delete(get(id));
    }

    public Todo get(Long id){
         return repository.findById(id).orElseThrow();
    }

    public Todo asigarTaskToTodo(Long idTask, Long idTodo){
        Task task=taskRepository.findById(idTask).get();
        Todo todo =repository.findById(idTodo).get();
        todo.addTask(task);

        return repository.save(todo);
    }

}
