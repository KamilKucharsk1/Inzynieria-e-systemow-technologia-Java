package com.example.projectboard;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

public interface HabitRepository extends JpaRepository<Habit, Integer> {


    public List<Habit> findByUserId(Integer userId);     //getHabitsByUser

}
