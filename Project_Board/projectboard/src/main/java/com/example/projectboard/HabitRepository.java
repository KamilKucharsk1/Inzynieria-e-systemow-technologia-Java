package com.example.projectboard;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface HabitRepository extends CrudRepository<Habit, String> {


    public List<Habit> findByUserId(String userId);     //getHabitsByUser
}
