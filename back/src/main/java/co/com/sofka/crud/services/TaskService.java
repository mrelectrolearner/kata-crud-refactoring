package co.com.sofka.crud.services;

import co.com.sofka.crud.entities.Task;
import co.com.sofka.crud.repository.TaskRepository;
import co.com.sofka.crud.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private TodoRepository todoRepository;

    public Iterable<Task> list(){

        return taskRepository.findAll();
    }

    public Task save(Task task){
        return taskRepository.save(task);
    }

    public void delete(Long id){
        taskRepository.delete(get(id));
    }

    public Task get(Long id){
        return taskRepository.findById(id).orElseThrow();
    }


}
