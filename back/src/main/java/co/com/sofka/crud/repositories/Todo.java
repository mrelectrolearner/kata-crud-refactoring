package co.com.sofka.crud.repositories;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="todo_id", unique = true, nullable = false)
    private Long id;
    private String name;
    private boolean completed;

    @OneToMany(mappedBy = "task", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Task> tasks;

}
