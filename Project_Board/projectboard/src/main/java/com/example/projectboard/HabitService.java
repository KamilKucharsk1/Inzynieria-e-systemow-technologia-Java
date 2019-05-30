
package com.example.projectboard;


import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.DependsOn;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Service
public class HabitService {

    @Autowired

    private HabitRepository habitRepository;


    public List<Habit> getAllHabits(String userId) {

        //return habits;
        List<Habit> habits = new ArrayList<>();
        habitRepository.findByUserId(userId)
                .forEach(habits::add);
        return habits;
    }

    public Habit getHabit(String id) {

        //return habits.stream().filter(t -> t.getId().equals(id)).findFirst().get();
        return habitRepository.findById(id).get();
    }

    public void addHabit(Habit habit) {

        habitRepository.save(habit);
    }

    public void updateHabit( Habit habit) {
        habitRepository.save(habit);
    }

    public void deleteHabit(String id) {
        habitRepository.deleteById(id);
    }

//    @Bean
//    @DependsOn({"first"})
//    InitializingBean sendDatabaseHabits(){
//        return () ->{
//            habitRepository.save(new Habit("","Running","Lorem ipsum bla bla",Habit.Priority.MEDIUM, "1"));
//            habitRepository.save(new Habit("","Tennis","Lorem ipsum bla bla",Habit.Priority.LOW,"2"));
//            habitRepository.save(new Habit("","Swimming","Lorem ipsum bla bla",Habit.Priority.HIGH,"1"));        };
//    }
}
//new List<Habit.Days>(List.of(Habit.Days.MONDAY)
//new Habit.Days[]{Habit.Days.MONDAY}

