package co.com.sofka.crud.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "todo")
@NoArgsConstructor
public class Todo implements Serializable {
    private static final long serialVersionUID=1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="todo_id", unique = true, nullable = false)
    private Long id;
    @Column(name="name", unique = true, nullable = false)
    private String name;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "todo_id")
    private List<Task> tasks=new ArrayList<>();

    public Todo(String name) {
        this.name = name;
    }

    public void addTask(Task task){
        this.tasks.add(task);

    }
}
