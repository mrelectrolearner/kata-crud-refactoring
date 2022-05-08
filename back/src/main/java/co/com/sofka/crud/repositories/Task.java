package co.com.sofka.crud.repositories;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="task_id", unique = true, nullable = false)
    private Long id;
    @Column(name="task")
    private String task;
    @Column(name="completed")
    private boolean isCompleted;

    @ManyToOne
    @JoinColumn(name = "todo_id")
    private Todo todo;

}
