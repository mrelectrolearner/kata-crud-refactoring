package co.com.sofka.crud.entities;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "task")
public class Task implements Serializable {
    private static final long serialVersionUID=1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="task_id", unique = true, nullable = false)
    private Long id;
    @Column(name="name")
    private String name;
    @Column(name="completed")
    private boolean isCompleted;
    @Column(name="todo_id")
    private Long todoId;

}
