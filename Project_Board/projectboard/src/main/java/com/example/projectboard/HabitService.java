
package com.example.projectboard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;


@Service
public class HabitService {

    @Autowired

    private HabitRepository habitRepository;


    public List<Habit> getAllHabits(Integer userId) {

        //return habits;
        List<Habit> habits = new ArrayList<>();
        habitRepository.findByUserId(userId);
        return habits;
    }

    public Habit getHabit(Integer id) {

        //return habits.stream().filter(t -> t.getId().equals(id)).findFirst().get();

        return habitRepository.getOne(id);
    }

    public void addHabit(Habit habit) {

        habitRepository.save(habit);
    }

    public void updateHabit( Habit habit) {
        //habit.getId()



        //entityManager.createQuery;

//        Query query = entityManager.createQuery("UPDATE habit SET Friday_active = 1, id = 1 ");

        //habitRepository.save(new Habit());
    }

//    public void updateDone(Habit habit){
//        List<Habit> habits = new ArrayList<>();
//        habitRepository.findAll().forEach(habit1 -> {
//
//        });
//        habitRepository.save(habit);
//    }

    public void deleteHabit(Integer id) {
        habitRepository.deleteById(id);
    }

//    @Bean
//    @DependsOn({"first"})
//    InitializingBean sendDatabaseHabits(){
//        return () ->{
//            habitRepository.save(new Habit("","Running","Lorem ipsum bla bla",Habit.Priority.MEDIUM, true,false,true,false,true,false,false,false,false,false,false,false,false,false,"1"));
//            habitRepository.save(new Habit("","Tennis","Lorem ipsum bla bla",Habit.Priority.LOW, true,false,false,true,false,true,false,false,false,false,false,false,false,false,"2"));
//            habitRepository.save(new Habit("","Swimming","Lorem ipsum bla bla",Habit.Priority.HIGH, true,true,false,false,false,false,true,false,false,false,false,false,false,false,"1"));        };
//    }
}
//new List<Habit.Days>(List.of(Habit.Days.MONDAY)
//new Habit.Days[]{Habit.Days.MONDAY}

