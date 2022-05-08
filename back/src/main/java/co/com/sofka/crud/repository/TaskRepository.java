package co.com.sofka.crud.repository;

import co.com.sofka.crud.repositories.Task;
import co.com.sofka.crud.repositories.Todo;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task,Long> {

}
