package co.com.sofka.crud.controller;

import co.com.sofka.crud.repositories.Task;
import co.com.sofka.crud.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:3000")
@RestController

public class TaskController {

    @Autowired
    private TaskService service;

    @GetMapping(value = "api/tasks")
    public Iterable<Task> list(){
        return service.list();
    }

    @PostMapping(value = "api/task")
    public Task save(@RequestBody Task task){
        return service.save(task);
    }

    @PutMapping(value = "api/task")
    public Task update(@RequestBody Task task){
        if(task.getId() != null){
            return service.save(task);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "api/{id}/task")
    public void delete(@PathVariable("id")Long id){
        service.delete(id);
    }

    @GetMapping(value = "api/{id}/task")
    public Task get(@PathVariable("id") Long id){
        return service.get(id);
    }
}
