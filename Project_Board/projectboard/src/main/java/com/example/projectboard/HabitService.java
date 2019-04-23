package com.example.projectboard;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class HabitService {

    @Autowired
    private HabitRepository habitRepository;

//    private List<Event> habits = new ArrayList<>(Arrays.asList(
//            new Event("1", "Reading 30 pages per day", "Everyday", "Everyday", 45 ),
//                    new Event("2", "Walking with a dog", "Mo, Tue, Fri", "3x per week", 30 ),
//                    new Event("3", "Running", "We, Sun", "2x per week", 60),
//                    new Event("4", "Something else", "Every Monday", "1x per week", 20 )
//            ));

    public List<Habit> getAllHabits() {

        //return habits;
        List<Habit> habits = new ArrayList<>();
        habitRepository.findAll()
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

    public void updateHabit(String id, Habit habit) {
        habitRepository.save(habit);
    }

    public void deleteHabit(String id) {
        habitRepository.deleteById(id);
    }
}
